import React from "react";

function Footer() {
  return (
    <>
      <hr />
      <footer className="footer footer-horizontal footer-center  text-base-content rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <a href="/" className="link link-hover">
            Home
          </a>
          <a href="/about" className="link link-hover">
            About us
          </a>
          <a href="contact" className="link link-hover">
            Contact
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 
                          1.1.9 2 2 2h16c1.1 0 2-.9 
                          2-2V6c0-1.1-.9-2-2-2zm0 4l-8 
                          5-8-5V6l8 5 8-5v2z"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/riju-kumari-59ba9023b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                  2.239 5 5 5h14c2.761 0 5-2.239 
                  5-5v-14c0-2.761-2.239-5-5-5zm-11 
                  19h-3v-10h3v10zm-1.5-11.268c-.966 
                  0-1.75-.784-1.75-1.75s.784-1.75 
                  1.75-1.75 1.75.784 
                  1.75 1.75-.784 1.75-1.75 
                  1.75zm13.5 11.268h-3v-5.604c0-3.368-4-3.115-4 
                  0v5.604h-3v-10h3v1.528c1.396-2.586 
                  7-2.777 7 2.476v5.996z"
                />
              </svg>
            </a>
            <a href="https://github.com/rijukumari/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path
                  d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 
                  0-.28-.01-1.02-.02-2-3.2.69-3.88-1.54-3.88-1.54-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.7.08-.7 
                  1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.28-5.26-5.7 
                  0-1.26.45-2.3 1.18-3.12-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.19a11 11 0 0 1 5.8 0c2.2-1.5 
                  3.17-1.19 3.17-1.19.63 1.57.24 2.73.12 3.02.73.82 1.17 1.86 1.17 3.12 0 4.43-2.71 5.41-5.29 5.7.41.36.78 
                  1.08.78 2.18 0 1.57-.01 2.83-.01 3.21 0 .31.21.68.8.56A10.999 10.999 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"
                />
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
