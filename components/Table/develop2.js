import React from "react";

export default function Develop2() {
  return (
    <>
      <div className=" mt-96 mx-auto  w-3/4">
        <div className="  grid grid-cols-2 gap-4">
          <div>
            <h2 className="mt-3 text-base text-white text-yellow-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
              FOR CREATORS
            </h2>
            <h2 className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-4xl lg:mx-0">
              Your Site. Your Code.
            </h2>
            <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Our world-class visual editing experience is fast, intuitive, and
              powerful. WYSIWYG in-place editing, reusable components, layouts,
              variations, styling, media, and more. Everything you've come to
              expect from a modern visual site builder. Move fast without
              developer help or having to worry about breaking anything.{" "}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-black font-medium rounded-md text-white bg-yellow-400 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-yellow-400 font-medium rounded-md text-indigo-700  hover:underline md:py-4 md:text-lg md:px-10"
                >
                  Learn how Stackbit works
                </a>
              </div>
            </div>
          </div>

          {/* ... */}
          <div>
            <img
              src="https://www.stackbit.com/images/Frame%201261151885.png"
              alt="Workflow"
            />
          </div>
        </div>
      </div>
    </>
  );
}
