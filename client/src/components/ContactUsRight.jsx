import React, { useState } from 'react';

export default function ContactUsRight() {
  const [formData, setFormData] = useState({
    userName: '',
    companyName: '',
    companyEmail: '',
    jobTitle: '',
    country: '',
    businessType: '',
    comments: '',
    agree: false
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.userName) tempErrors.userName = "User Name is required.";
    if (!formData.companyName) tempErrors.companyName = "Company Name is required.";
    if (!formData.companyEmail) {
      tempErrors.companyEmail = "Company Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.companyEmail)) {
      tempErrors.companyEmail = "Email is not valid.";
    }
    if (!formData.jobTitle) tempErrors.jobTitle = "Job Title is required.";
    if (!formData.country) tempErrors.country = "Country is required.";
    if (!formData.businessType) tempErrors.businessType = "Business Type is required.";
    if (!formData.agree) tempErrors.agree = "You must agree to the privacy policy.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form is valid! Submitting...');
    }
  };

  return (
    <div className="w-[50%] h-full rounded-md bg-white px-6 py-6 shadow-lg border sm:rounded-lg">
      <form onSubmit={handleSubmit} className="group">
        <div className="mt-4">
          <label htmlFor="userName" className="mb-2 block text-sm font-medium text-gray-900">User Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.userName ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          />
          {errors.userName && <p className="mt-1 text-sm text-red-500">{errors.userName}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="companyName" className="mb-2 block text-sm font-medium text-gray-900">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          />
          {errors.companyName && <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="companyEmail" className="mb-2 block text-sm font-medium text-gray-900">Company Email</label>
          <input
            type="email"
            name="companyEmail"
            value={formData.companyEmail}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.companyEmail ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          />
          {errors.companyEmail && <p className="mt-1 text-sm text-red-500">{errors.companyEmail}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="jobTitle" className="mb-2 block text-sm font-medium text-gray-900">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.jobTitle ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          />
          {errors.jobTitle && <p className="mt-1 text-sm text-red-500">{errors.jobTitle}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-900">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.country ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          >
            <option value="">Select</option>
            <option value="Country 1">Country 1</option>
            <option value="Country 2">Country 2</option>
            <option value="Country 3">Country 3</option>
          </select>
          {errors.country && <p className="mt-1 text-sm text-red-500">{errors.country}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="businessType" className="mb-2 block text-sm font-medium text-gray-900">Business Type</label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.businessType ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          >
            <option value="">Select</option>
            <option value="Business Type 1">Business Type 1</option>
            <option value="Business Type 2">Business Type 2</option>
            <option value="Business Type 3">Business Type 3</option>
          </select>
          {errors.businessType && <p className="mt-1 text-sm text-red-500">{errors.businessType}</p>}
        </div>

        <div className="mt-4">
          <label htmlFor="comments" className="mb-2 block text-sm font-medium text-gray-900">Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className={`block w-full rounded-lg border ${errors.comments ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          ></textarea>
          {errors.comments && <p className="mt-1 text-sm text-red-500">{errors.comments}</p>}
        </div>

        <div className="mt-4 flex flex-col items-start">
        <div className="flex items-start">
            <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className={`h-4 w-4 rounded border ${errors.agree ? 'border-red-500' : 'border-gray-300'} text-indigo-600 focus:ring-pink-500`}
            />
            <label htmlFor="agree" className="ml-2 block text-sm text-gray-900">I'd like to receive more information about TUNE; I understand and agree to the privacy policy.</label>
        </div>
        {errors.agree && <p className="mt-1 text-sm text-red-500">{errors.agree}</p>}
        </div>


        <div className="mt-4 flex items-center">
          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2  focus:ring-pink-500`}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
