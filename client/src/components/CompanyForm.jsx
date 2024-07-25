import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import baseURL from '../../DB';
import { useNavigate } from 'react-router-dom';
import { AppState } from '../context/UserContext';



export default function CompanyRegistryForm() {
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [industry, setIndustry] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = AppState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsLoading(true);
      const data = {
        companyName,
        address,
        email,
        phone,
        website,
        industry,
        description
      };

      try {
        const response = await axios.post(`${baseURL}/company/${user.id}/register`, data);
        if (response && response.data) {
          toast.success('Company registered successfully!');
          setIsSubmitted(true);
          setCompanyName('');
          setAddress('');
          setEmail('');
          setPhone('');
          setWebsite('');
          setIndustry('');
          setDescription('');
        }
        navigate('/');
      } catch (error) {
        if (error.response && error.response.data) {
          toast.error(error.response.data.message || 'Server error');
        } else {
          toast.error('An error occurred. Please try again.');
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!companyName) errors.companyName = 'Company Name is required';
    if (!address) errors.address = 'Address is required';
    if (!email) errors.email = 'Email is required';
    if (!phone) errors.phone = 'Phone is required';
    if (!website) errors.website = 'Website is required';
    if (!industry) errors.industry = 'Industry is required';
    if (!description) errors.description = 'Description is required';

    if (companyName && !/^[\w\s-]+$/.test(companyName)) {
      errors.companyName = 'Please enter a valid company name (only letters, numbers, spaces, and hyphens are allowed)';
    }
    if (email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (phone && !/^\d{10}$/.test(phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (website && !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,4}\/?$/.test(website)) {
      errors.website = 'Please enter a valid website URL';
    }
    if (industry && !/^[a-zA-Z\s-]+$/.test(industry)) {
      errors.industry = 'Please enter a valid industry (only letters, spaces, and hyphens are allowed)';
    }

    return errors;
  };

  return (
    <div className='w-[50%] h-full rounded-md bg-white px-4 py-6 shadow-xl border sm:rounded-lg'>
      <h2 className='text-center text-3xl mb-4 font-semibold'>Register Company</h2>
      {isSubmitted && <p className="text-center text-green-500 mb-4">Company registered successfully!</p>}
      <form onSubmit={handleSubmit} className="group">
        <div className="mt-4">
          <label htmlFor="companyName" className="mb-2 block text-sm font-medium text-gray-900">Company Name</label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="e.g., ABC Corp"
            className={`block w-full rounded-lg border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            title="Only letters, numbers, spaces, and hyphens are allowed"
          />
          {errors.companyName && <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="address" className="mb-2 block text-sm font-medium text-gray-900">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="e.g., 123 Main St, Springfield"
            className={`block w-full rounded-lg border ${errors.address ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            title="Please enter a valid address"
          />
          {errors.address && <p className="mt-1 text-sm text-red-500">{errors.address}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g., info@abccorp.com"
            className={`block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            title="Please enter a valid email address"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g., 1234567890"
            className={`block w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            pattern="^\d{10}$"
            title="Please enter a valid 10-digit phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="website" className="mb-2 block text-sm font-medium text-gray-900">Website</label>
          <input
            type="text"
            name="website"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="e.g., https://www.abccorp.com"
            className={`block w-full rounded-lg border ${errors.website ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            title="Please enter a valid website URL"
          />
          {errors.website && <p className="mt-1 text-sm text-red-500">{errors.website}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="industry" className="mb-2 block text-sm font-medium text-gray-900">Industry</label>
          <input
            type="text"
            name="industry"
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="e.g., Technology, Finance"
            className={`block w-full rounded-lg border ${errors.industry ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            pattern="^[a-zA-Z\s-]+$"
            title="Only letters, spaces, and hyphens are allowed"
          />
          {errors.industry && <p className="mt-1 text-sm text-red-500">{errors.industry}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-900">Description</label>
          <textarea
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide a brief description of the company"
            className={`block w-full rounded-lg border ${errors.description ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          ></textarea>
          {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register Company'}
          </button>
        </div>
      </form>
    </div>
  );
}
