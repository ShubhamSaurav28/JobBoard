import React, { useState } from 'react';
import axios from 'axios';
import { AppState } from '../context/UserContext';
import baseURL from '../../DB';
import { useNavigate } from 'react-router-dom';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dskwi24jf',
  api_key: '646158496919155',
  api_secret: 'tmGbZ3Xt6w15v56IUEIWKF0BgO0'
});

export default function ProfileEditBox({ userProfile }) {
  const { user } = AppState();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: userProfile.username,
    designation: userProfile.designation || '',
    description: userProfile.description || '',
    skills: userProfile.skills.join(', ') || '',
    education: userProfile.education || [],
    profilepic: userProfile.profilepic || '',
    email: userProfile.email || '',
    dob: userProfile.dob ? new Date(userProfile.dob).toISOString().split('T')[0] : '',
    totalexp: userProfile.totalexp || '',
    phone: userProfile.phone || '',
    location: userProfile.location || '',
    experience: userProfile.experience || [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onClose = () => {
    navigate('/profile');
  }

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = formData.experience.map((exp, expIndex) => {
      if (expIndex === index) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    setFormData({ ...formData, experience: updatedExperience });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = formData.education.map((edu, eduIndex) => {
      if (eduIndex === index) {
        return { ...edu, [field]: value };
      }
      return edu;
    });
    setFormData({ ...formData, education: updatedEducation });
  };

  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { company: '', designation: '', yearofexp: '' }],
    });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { institute: '', degree: '', year: '' }],
    });
  };

  const handleRemoveExperience = (index) => {
    setFormData({
      ...formData,
      experience: formData.experience.filter((_, expIndex) => expIndex !== index),
    });
  };

  const handleRemoveEducation = (index) => {
    setFormData({
      ...formData,
      education: formData.education.filter((_, eduIndex) => eduIndex !== index),
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      // formData.append('upload_preset', 'your-upload-preset'); // Replace with your upload preset
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/your-cloud-name/image/upload`,
          formData
        );
        setFormData({ ...formData, profilepic: response.data.secure_url });
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleSkills = (formData) => {
    return {
        ...formData,
        skills: formData.skills.split(',').map(skill => skill.trim()),
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fData = handleSkills(formData);
    try {
      await axios.put(`${baseURL}/user/${user.id}/profile`, fData);
      onClose();
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className='mt-[75px] w-full flex items-center justify-center bg-gray-400 bg-opacity-50'>
      <div className='bg-white w-[60%] p-6 rounded-md shadow-2xl mb-6 mt-5'>
        <h2 className='text-2xl font-semibold mb-4'>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            {formData.profilepic && (
              <img
                src={formData.profilepic}
                alt='Profile'
                className='mt-4 w-32 h-32 object-cover rounded-full mx-auto'
              />
            )}
            <label className='block text-gray-700'>Profile Picture</label>
            <input
              type='file'
              accept='image/*'
              onChange={handleFileChange}
              className='w-full border px-3 py-2 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Username</label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleInputChange}
              className='w-full border px-3 py-2 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
              className='w-full border px-3 py-2 rounded-md'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Designation</label>
            <input
              type='text'
              name='designation'
              value={formData.designation}
              onChange={handleInputChange}
              className='w-full border px-3 py-2 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Description</label>
            <textarea
              name='description'
              value={formData.description}
              onChange={handleInputChange}
              className='w-full border px-3 py-2 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Skills (comma separated)</label>
            <input
              type='text'
              name='skills'
              value={formData.skills}
              onChange={handleInputChange}
              className='w-full border px-3 py-2 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Date of Birth</label>
            <input
              type='date'
              name='dob'
              value={formData.dob}
              onChange={handleInputChange}
              className='w-full border px-3 py-2 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Total Experience (years)</label>
            <input
              type='number'
              name='totalexp'
              value={formData.totalexp}
              onChange={handleInputChange}
              className='w-full border px-3 py-2 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Phone</label>
            <input
              type='text'
              name='phone'
              value={formData.phone}
              onChange={handleInputChange}
              className='w-full border px-3 py-2 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Location</label>
            <input
              type='text'
              name='location'
              value={formData.location}
              onChange={handleInputChange}
              className='w-full border px-3 py-2 rounded-md'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Experience</label>
            {formData.experience.map((exp, index) => (
              <div key={index} className='mb-2'>
                <input
                  type='text'
                  placeholder='Company'
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                  className='w-full border px-3 py-2 rounded-md mb-2'
                />
                <input
                  type='text'
                  placeholder='Designation'
                  value={exp.designation}
                  onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
                  className='w-full border px-3 py-2 rounded-md mb-2'
                />
                <input
                  type='number'
                  placeholder='Years of Experience'
                  value={exp.yearofexp}
                  onChange={(e) => handleExperienceChange(index, 'yearofexp', e.target.value)}
                  className='w-full border px-3 py-2 rounded-md mb-2'
                />
                <button
                  type='button'
                  onClick={() => handleRemoveExperience(index)}
                  className='bg-red-500 text-white px-3 py-1 rounded-md'
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type='button'
              onClick={handleAddExperience}
              className='bg-blue-500 text-white px-3 py-1 rounded-md'
            >
              Add Experience
            </button>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Education</label>
            {formData.education.map((edu, index) => (
              <div key={index} className='mb-2'>
                <input
                  type='text'
                  placeholder='Institute'
                  value={edu.institute}
                  onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
                  className='w-full border px-3 py-2 rounded-md mb-2'
                />
                <input
                  type='text'
                  placeholder='Degree'
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                  className='w-full border px-3 py-2 rounded-md mb-2'
                />
                <input
                  type='number'
                  placeholder='Year'
                  value={edu.year}
                  onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
                  className='w-full border px-3 py-2 rounded-md mb-2'
                />
                <button
                  type='button'
                  onClick={() => handleRemoveEducation(index)}
                  className='bg-red-500 text-white px-3 py-1 rounded-md'
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type='button'
              onClick={handleAddEducation}
              className='bg-blue-500 text-white px-3 py-1 rounded-md'
            >
              Add Education
            </button>
          </div>
          <button
            type='submit'
            className='bg-green-500 text-white px-4 py-2 rounded-md'
          >
            Save Changes
          </button>
          <button
            type='button'
            onClick={onClose}
            className='bg-red-500 text-white px-4 py-2 rounded-md ml-4'
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
