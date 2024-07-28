const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Company = require('../models/Company');
const { z } = require('zod');
const multer  = require('multer');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const path = require('path');
const fs = require('fs');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const uniqueFilename = `${uuidv4()}${ext}`;
      cb(null, uniqueFilename); 
    }
  });

const upload = multer({ storage });

const signupSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters long'),
    email: z.string().email('Enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long')
});

const loginSchema = z.object({
    email: z.string().email('Enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long')
});

router.post('/signup', async (req, res) => {
    const parseResult = signupSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ errors: parseResult.error.errors });
    }

    const { username, email, password } = parseResult.data;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = bcrypt.genSaltSync(10);
        const myEncPassword = bcrypt.hashSync(password, salt);
        const user = await User.create({
            username: username,
            email: email,
            password: myEncPassword
        });
        res.status(200).json({ message: 'Sign in Sucessfull' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    const parseResult = loginSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json({ errors: parseResult.error.errors });
    }

    const { email, password } = parseResult.data;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/profile-pic/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ profilePicUrl: user.profilepic });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/profile/:id', async (req,res) => {
    const { id } = req.params;
    try{
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        let com;
        if(user.company){
            com = await Company.findById(user.company);
        }
        res.status(200).json({ user: user, company: com });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
})

router.post('/:userId/upload', upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    console.log(req.file);
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        user.resume.filename = req.file.originalname;
        user.resume.fileid = req.file.filename;
        await user.save();

        res.json({ message: 'File uploaded and user updated successfully', file: req.file });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/:userId/file', async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        if (!user.resume || !user.resume.fileid) {
            return res.status(404).json({ error: 'Resume not found for this user' });
        }
        const filePath = path.join('uploads', user.resume.fileid);
        try {
            await fs.promises.access(filePath);
        } catch (err) {
            console.error('File access error:', err);
            return res.status(404).json({ error: 'File not found' });
        }

        try {
            const fileData = await fs.promises.readFile(filePath);
            res.json({
                filename: user.resume.filename,
                content: fileData.toString('base64')
            });
        } catch (err) {
            console.error('File read error:', err);
            res.status(500).json({ error: 'Error reading file' });
        }
    } catch (error) {
        console.error('Error fetching user or file:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.put('/:userId/profile', upload.single('profilepic'), async (req, res) => {
    try {
      const { userId } = req.params;
      const {
        username,
        designation,
        description,
        skills,
        dob,
        totalexp,
        phone,
        location,
        experience,
        education
      } = req.body;  
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      user.username = username || user.username;
      user.designation = designation || user.designation;
      user.description = description || user.description;
      if (Array.isArray(skills)) {
        user.skills = skills.map(skill => skill.trim());
      }
      user.dob = dob ? new Date(dob) : user.dob;
      user.totalexp = totalexp || user.totalexp;
      user.phone = phone || user.phone;
      user.location = location || user.location;
      user.experience = experience || user.experience;
      user.education = education || user.education;
      if (req.file) {
        user.profilepic = req.file.path;
      }
      const updatedUser = await user.save();
      res.json(updatedUser);
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
