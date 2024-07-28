const express = require('express');
const { z } = require('zod');
const Company = require('../models/Company');
const User = require('../models/User');
const router = express.Router();

const companySchema = z.object({
  companyName: z.string().min(3, 'Company name must be at least 3 characters long'),
  address: z.string().min(5, 'Address must be at least 5 characters long'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits long'),
  website: z.string().url('Enter a valid URL'),
  industry: z.string().min(3, 'Industry must be at least 3 characters long'),
  description: z.string().min(10, 'Description must be at least 10 characters long')
});

router.post('/:userId/register', async (req, res) => {
  const { userId } = req.params;
  const parseResult = companySchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({ errors: parseResult.error.errors });
  }

  const { companyName, address, email, phone, website, industry, description } = parseResult.data;

  try {
    // Check if company already exists
    const existingCompany = await Company.findOne({ email });
    if (existingCompany) {
      return res.status(400).json({ message: 'Company already registered with this email' });
    }
    const company = await Company.create({
      companyName,
      address,
      email,
      phone,
      website,
      industry,
      description,
      user: userId
    });

    await User.findByIdAndUpdate(userId, {
      company: company._id 
    });

    res.status(200).json({ message: 'Company registration successful', company });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
