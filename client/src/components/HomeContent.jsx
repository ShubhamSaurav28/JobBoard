import React from 'react'

export default function HomeContent() {
    const truncateText = (text, wordLimit) => {
        return text.split(" ").slice(0, wordLimit).join(" ") + "...";
      };
    
      const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ullam maxime exercitationem placeat quibusdam perspiciatis nemo neque tempora cupiditate quasi, ratione facilis sit. Explicabo provident nihil ullam perspiciatis libero at optio nostrum illo hic, quo cumque asperiores, distinctio eaque pariatur deleniti consectetur dicta tempora voluptatum! Tempora suscipit debitis at cum.";
      
  return (
    <>
    <section className="py-10 text-center">
        <h2 className="text-6xl font-semibold text-gray-800">Welcome to JobDekho</h2>
        <p className="mt-4 text-lg text-wrap mx-12 text-gray-600">
        Your go-to platform for discovering job opportunities tailored to your skills and career goals. Explore thousands of listings across industries and locations, apply effortlessly, and stay updated with the latest openings. Whether you're starting your career or seeking new challenges, JobDekho is here to support your journey. Join us today and take the next step towards your dream job!
        </p>
      </section>
      <section className="py-10 bg-gray-100">
        <h3 className="text-3xl font-semibold text-gray-800 text-center">How It Works</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="w-80 text-center">
            <h4 className="text-xl font-semibold text-gray-800">1. Search</h4>
            <p className="mt-2 text-gray-600">Browse through our extensive list of job openings to find opportunities that suit your skills and interests.</p>
          </div>
          <div className="w-80 text-center">
            <h4 className="text-xl font-semibold text-gray-800">2. Apply</h4>
            <p className="mt-2 text-gray-600">Submit your application directly through our platform for the jobs you are interested in.</p>
          </div>
          <div className="w-80 text-center">
            <h4 className="text-xl font-semibold text-gray-800">3. Get Hired</h4>
            <p className="mt-2 text-gray-600">Land your dream job and take the next step in your career with JobDekho.</p>
          </div>
        </div>
      </section>
      <section className="py-10 text-center">
        <h3 className="text-3xl font-semibold text-gray-800">What Our Users Say</h3>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <div className="w-80 bg-white p-4 border rounded-md shadow-lg">
            <p className="text-gray-600">"JobDekho helped me find my dream job in just two weeks! The process was seamless and straightforward."</p>
            <p className="mt-4 text-gray-800 font-semibold">- Ankit Sharma</p>
          </div>
          <div className="w-80 bg-white p-4 border rounded-md shadow-lg">
            <p className="text-gray-600">"As an employer, JobDekho has made it easy for us to connect with talented professionals. Highly recommended!"</p>
            <p className="mt-4 text-gray-800 font-semibold">- Priya Singh</p>
          </div>
        </div>
      </section>
      <section className="py-10 bg-indigo-500 text-center text-white">
        <h3 className="text-3xl font-semibold">Ready to Find Your Dream Job?</h3>
        <p className="mt-4">Create a profile today and start applying for jobs that match your skills and interests.</p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-500 rounded-lg shadow-xl shadow-indigo-900">Get Started</button>
      </section>
    </>
  )
}
