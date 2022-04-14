import React from "react";

export default function Resources() {
  return (
    <>
      <p className="text-center my-20 font-medium text-white">RESOURCES</p>
      <div className="w-3/5  mx-auto">
        <div className="text-white grid grid-cols-3 gap-4">
          <div>
            <div className="text-white p-4 hover:bg-[#1a1f51] border-white rounded border-solid border-2 border-gray-700  ">
              <div className="flex    ">
                <img
                  className="block h-[80px] w-[80px] "
                  src="https://www.stackbit.com/images/Get%20Started%20icon-66abeb8f.svg"
                  alt="Workflow"
                />
                <div className="mx-4">
                  <h2 className="font-black text-2xl">Getting started</h2>
                  <p>Follow the tutorial to build your first Stackbit site</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-white p-4 hover:bg-[#1a1f51] border-white rounded  border-solid border-2 border-gray-700 ">
              <div className="flex    ">
                <img
                  className="block h-[80px] w-[80px] "
                  src="https://www.stackbit.com/images/dev.svg"
                  alt="Workflow"
                />
                <div className="mx-4">
                  <h2 className="font-black text-2xl">Getting started</h2>
                  <p>Follow the tutorial to build your first Stackbit site</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-white p-4 hover:bg-[#1a1f51] border-white rounded  border-solid border-2 border-gray-700 ">
              <div className="flex    ">
                <img
                  className="block h-[80px] w-[80px] "
                  src="https://www.stackbit.com/images/Tailwind.svg"
                  alt="Workflow"
                />
                <div className="mx-4">
                  <h2 className="font-black text-2xl">Getting started</h2>
                  <p>Follow the tutorial to build your first Stackbit site</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid w-3/4 mx-auto my-10 grid-cols-1 divide-y">
        <div></div>
        <div></div>
      </div>
    </>
  );
}
