import React from 'react';

export default function ContactUsLeft() {
  return (
    <>
      <div className="w-[50%] px-6 space-y-6">
        <div>
          <h2 className="text-4xl font-bold mb-2 ">Find Your Dream Job</h2>
          <p className="text-gray-700">Discover opportunities and connect with top employers in your field.</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Job Search Tips</h2>
          <p className="text-gray-700">Explore our resources and guides on optimizing your job search and career development.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Company Insights</h2>
          <p className="text-gray-700">Learn about company cultures, values, and insights from industry leaders.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Contact Us</h2>
          <p className="text-gray-700">
            <strong>General Inquiries</strong><br />
            Have questions or need assistance? Contact us at <a href="mailto:info@jobboardportal.com" className="text-blue-600 hover:underline">info@jobboardportal.com</a>.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Support</h2>
          <p className="text-gray-700">For technical support or assistance with your account, email <a href="mailto:support@jobboardportal.com" className="text-blue-600 hover:underline">support@jobboardportal.com</a>.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Business Partnerships</h2>
          <p className="text-gray-700">Interested in partnering with us? Contact our business development team at <a href="mailto:partnerships@jobboardportal.com" className="text-blue-600 hover:underline">partnerships@jobboardportal.com</a>.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Office Locations</h2>
          <p className="text-gray-700">
            <strong>Headquarters</strong><br />
            123 Job Board St, Suite 100, City, State 12345
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 ">Additional Offices</h2>
          <p className="text-gray-700">
            <strong>New York Office</strong><br />
            456 Job Seeker Ave, 2nd Floor, New York, NY 10001
          </p>
        </div>
      </div>
    </>
  );
}
