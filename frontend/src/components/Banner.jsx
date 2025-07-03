import React from "react";
import book from "/assets/book3.png"; // Adjust the path to your logo image
import { Link } from "react-router-dom";
function Banner() {
  return (
    <>

      <div className="max-w-screen-2xl container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col-reverse md:flex-row my-10 gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 mt-10 md:mt-32 space-y-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-base md:text-md dark:bg-slate-900 dark:text-white">
            This book offers an unforgettable journey filled with inspiration,
            wisdom, and engaging stories that will leave a lasting impact on
            your heart and mind. Whether you're looking to learn something new,
            escape into a captivating tale, or simply enjoy a good read, this
            book is the perfect choice. Don’t miss out—grab your copy today and
            experience the magic for yourself!
          </p>

          {/* Email Join Section */}
          <div className="flex flex-wrap gap-2">
            <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                className="grow w-96 outline-none dark:bg-slate-900 dark:text-white"
                placeholder="your@email.com"
                required
              />
            </label>
            <button className="btn btn-neutral rounded space--6">
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                className="px-2 py-1 "
              >
                Join
              </a>
            </button>
          </div>

          {/* Course Button */}
          <Link to="/course">
            <button className="btn btn-secondary mt-4">Course</button>
          </Link>
        </div>

        {/* Image Section */}

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={book}
            alt="Book"
            className="w-full sm:w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] h-auto mt-6 md:mt-0"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
