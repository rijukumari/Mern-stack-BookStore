import React from 'react';
import book from "/assets/book.png";
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
     <div className="max-w-screen-2xl mt-28 container mx-auto px-8 py-16 flex flex-col md:flex-row items-center gap-10">
      {/* Image Section */}
      <div className="md:w-1/2 ">
        <img src = {book}
          alt="About us"
          className="rounded-lg shadow-lg object-cover w-full h-80 md:h-full"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our platform! We are dedicated to providing free, high-quality educational books and resources to learners everywhere.
          Our mission is to make knowledge accessible to everyone without any cost.
        {/* </p> */}
        {/* <p className="text-lg mb-6"> */}
          Whether you're a student, a professional, or a lifelong learner, our collection of free books is curated to help you explore and grow your skills.
          We believe that learning should be easy, engaging, and free of barriers.
        {/* </p> */}
        {/* <p className="text-lg mb-8"> */}
          Feel free to browse our free courses and books, and don’t hesitate to reach out if you have any questions or suggestions.
          Happy learning!
        </p>

        {/* Button */}
        <Link to = '/contact'>
        
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded shadow"
          
        >
          Contact Us
        </button>
        </Link>
      </div>
    </div>
    </>
  )
}

export default About
