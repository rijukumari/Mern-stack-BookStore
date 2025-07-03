import { Link } from "react-router-dom";
import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-base-200">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <h3 className="font-bold text-2xl text-center mb-6 text-gray-800 dark:text-white">
          Contact Us
        </h3>

        <form method="dialog" className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 outline-none bg-white dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 outline-none bg-white dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Type your message"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 resize-none outline-none bg-white dark:bg-slate-700 dark:text-white"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary w-full sm:w-auto px-6"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
