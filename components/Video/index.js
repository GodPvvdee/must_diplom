import React from 'react'

export default function Video() {
  return (
    <div className='mx-auto w-1/2 '>
        <video autoPlay loop muted className="relative z-10 w-auto min-w-full min-h-full ">
  <source src="https://res.cloudinary.com/stackbit-com/video/upload/v1639094383/Home_page_header_V2_launch_V.2_ehqsmj_aefk0g.webm" type="video/mp4" />
  Your browser does not support the video tag.
</video>
    </div>
  )
}
