import React from "react";

export default function Cards(props) {
  return (
    <div>
      <article class=" transition ease-in-out delay-150  hover:-translate-y-2  duration-500  bg-[#1a1f51] accent-a rounded-lg p-6 sm:p-8 space-y-4 sm:space-y-6 text-left md:text-left">
        <figure class="mx-auto">
          <img
            src={
              props.zurag
                ? props.zurag
                : "https://www.stackbit.com/images/How%20it%20works.svg"
            }
            className="w-full"
            alt="gngng"
          />
        </figure>

        <h2 class={`text-sm sm:text-3xl text-[${props.ongo}]`}>
          {props.name ? props.name : "We know youre dying to know to know"}
        </h2>

        <div class=" sm:text-lg text-white">
          <p>
            Learn how Stackbit works and what we're doing behind the scenes.
          </p>
        </div>

        <div>
          <a
            href="https://docs.stackbit.com/conceptual-guides/how-stackbit-works/"
            aria-label=""
            id="fully-configurable-and-customizable-learn-more-link"
            class="lg:whitespace-nowrap text-lg flex align-middle text-[#4c57c5]"
          >
            <span>Learn more</span>

            <svg
              class="fill-current h-6 w-6 ml-1.5 m-auto"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.293 5.707l5.293 5.293h-11.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h11.586l-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l7-7c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-7-7c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
            </svg>
          </a>
        </div>
      </article>
    </div>
  );
}
