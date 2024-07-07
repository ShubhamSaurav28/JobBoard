import React, { useState } from 'react';

export default function PostJobForm() {
  const [jobDesignation, setJobDesignation] = useState('');
  const [salary, setSalary] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [location, setLocation] = useState('');
  const [tags, setTags] = useState('');
  const [requirements, setRequirements] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [qualifications, setQualifications] = useState('');

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Job Designation:', jobDesignation);
      console.log('Salary:', salary);
      console.log('Job Description:', jobDescription);
      console.log('Location:', location);
      console.log('Tags:', tags);
      console.log('Requirements:', requirements);
      console.log('Employment Type:', employmentType);
      console.log('Qualifications:', qualifications);
      setIsSubmitted(true);
      // Reset form after successful submission
      setJobDesignation('');
      setSalary('');
      setJobDescription('');
      setLocation('');
      setTags('');
      setRequirements('');
      setEmploymentType('');
      setQualifications('');
      setErrors({});
      setTimeout(() => setIsSubmitted(false), 3000); // Remove success message after 3 seconds
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!jobDesignation) errors.jobDesignation = 'Job Designation is required';
    if (!salary) errors.salary = 'Salary is required';
    if (!jobDescription) errors.jobDescription = 'Job Description is required';
    if (!location) errors.location = 'Location is required';
    if (!tags) errors.tags = 'Tags are required';
    if (!requirements) errors.requirements = 'Requirements are required';
    if (!employmentType) errors.employmentType = 'Employment Type is required';
    if (!qualifications) errors.qualifications = 'Qualifications are required';

    // Validate patterns
    if (jobDesignation && !/^[\w\s-]+$/.test(jobDesignation)) {
      errors.jobDesignation = 'Please enter a valid job designation (only letters, numbers, spaces, and hyphens are allowed)';
    }
    if (salary && !/^(\d+\.?\d*|\.\d+)([kK]|[lL][pP][aA])(-(\d+\.?\d*|\.\d+)([kK]|[lL][pP][aA]))?$/.test(salary)) {
      errors.salary = 'Please enter a valid salary format (e.g., 10Lpa-15Lpa or 12Lpa)';
    }
    if (location && !/^[a-zA-Z0-9\s,]+$/.test(location)) {
      errors.location = 'Please enter a valid location (only letters, numbers, spaces, and commas are allowed)';
    }
    if (tags && !/^[a-zA-Z0-9\s,]+$/.test(tags)) {
      errors.tags = 'Please enter valid tags (only letters, numbers, spaces, and commas are allowed)';
    }
    if (employmentType && !/^[a-zA-Z\s-]+$/.test(employmentType)) {
      errors.employmentType = 'Please enter a valid employment type (only letters, spaces, and hyphens are allowed)';
    }

    return errors;
  };

  return (
    <div className='w-[50%] h-full rounded-md bg-white px-6 py-6 shadow-xl border sm:rounded-lg'>
      <h2 className='text-center text-3xl mb-4 font-semibold'>Post a Job</h2>
      {isSubmitted && <p className="text-center text-green-500 mb-4">Job posted successfully!</p>}
      <form onSubmit={handleSubmit} className="group">
        <div className="mt-4">
          <label htmlFor="jobDesignation" className="mb-2 block text-sm font-medium text-gray-900">Job Designation</label>
          <input
            type="text"
            name="jobDesignation"
            id="jobDesignation"
            value={jobDesignation}
            onChange={(e) => setJobDesignation(e.target.value)}
            placeholder="e.g., Software Engineer"
            className={`block w-full rounded-lg border ${errors.jobDesignation ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            title="Only letters, numbers, spaces, and hyphens are allowed"
          />
          {errors.jobDesignation && <p className="mt-1 text-sm text-red-500">{errors.jobDesignation}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="salary" className="mb-2 block text-sm font-medium text-gray-900">Salary</label>
          <input
            type="text"
            name="salary"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="e.g., 10Lpa-15Lpa or 12Lpa annualy"
            className={`block w-full rounded-lg border ${errors.salary ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            pattern="^(\d+\.?\d*|\.\d+)([kK]|[lL][pP][aA])(-(\d+\.?\d*|\.\d+)([kK]|[lL][pP][aA]))?$"
            title="Please enter a valid salary format (e.g., 10Lpa-15Lpa or 12Lpa)"
          />
          {errors.salary && <p className="mt-1 text-sm text-red-500">{errors.salary}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="jobDescription" className="mb-2 block text-sm font-medium text-gray-900">Job Description</label>
          <textarea
            name="jobDescription"
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Provide a detailed job description"
            className={`block w-full rounded-lg border ${errors.jobDescription ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          ></textarea>
          {errors.jobDescription && <p className="mt-1 text-sm text-red-500">{errors.jobDescription}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="location" className="mb-2 block text-sm font-medium text-gray-900">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g., New York, NY"
            className={`block w-full rounded-lg border ${errors.location ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            pattern="^[a-zA-Z0-9\s,]+$"
            title="Only letters, numbers, spaces, and commas are allowed"
          />
          {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="tags" className="mb-2 block text-sm font-medium text-gray-900">Tags</label>
          <input
            type="text"
            name="tags"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="e.g., work from home, easy apply, high salary"
            className={`block w-full rounded-lg border ${errors.tags ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            pattern="^[a-zA-Z0-9\s,]+$"
            title="Only letters, numbers, spaces, and commas are allowed"
          />
          {errors.tags && <p className="mt-1 text-sm text-red-500">{errors.tags}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="requirements" className="mb-2 block text-sm font-medium text-gray-900">Requirements</label>
          <textarea
            name="requirements"
            id="requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            placeholder="List the job requirements"
            className={`block w-full rounded-lg border ${errors.requirements ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          ></textarea>
          {errors.requirements && <p className="mt-1 text-sm text-red-500">{errors.requirements}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="employmentType" className="mb-2 block text-sm font-medium text-gray-900">Employment Type</label>
          <input
            type="text"
            name="employmentType"
            id="employmentType"
            value={employmentType}
            onChange={(e) => setEmploymentType(e.target.value)}
            placeholder="e.g., Full-time, Part-time, Contract"
            className={`block w-full rounded-lg border ${errors.employmentType ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
            pattern="^[a-zA-Z\s-]+$"
            title="Only letters, spaces, and hyphens are allowed"
          />
          {errors.employmentType && <p className="mt-1 text-sm text-red-500">{errors.employmentType}</p>}
        </div>
        <div className="mt-4">
          <label htmlFor="qualifications" className="mb-2 block text-sm font-medium text-gray-900">Qualifications</label>
          <textarea
            name="qualifications"
            id="qualifications"
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value)}
            placeholder="Specify required qualifications"
            className={`block w-full rounded-lg border ${errors.qualifications ? 'border-red-500' : 'border-gray-300'} bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-pink-500 focus:ring-pink-500`}
          ></textarea>
          {errors.qualifications && <p className="mt-1 text-sm text-red-500">{errors.qualifications}</p>}
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
