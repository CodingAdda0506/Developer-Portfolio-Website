import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const ProjectCard = ({title, desc, githubLink, demo}) => {
  return (
    // Project Card 
    <div className='p-3 text-center w-[300px] bg-[#444C56] rounded-xl flex flex-col justify-center items-center'>
        {/* Project Card Title  */}
        <div className="font-bold text-[20px]">
        {title}
        </div>
        {/* Project Card Description */}
        <div className="text-[14px]">
        {desc}
        </div>
        {/* Project Card Buttons */}
        <div className="mt-2 uppercase text-[14px] flex justify-center items-center">
            <a href={githubLink} className='px-3 py-1 bg-[#2563EB] flex justify-center items-center rounded-lg'><span>Github</span> <BsFillArrowRightCircleFill className='ml-3'/></a>
            <a href={demo} className='ml-4 px-3 py-1 bg-[#2563EB] flex justify-center items-center rounded-lg'><span>Demo</span> <BsFillArrowRightCircleFill className='ml-3'/></a>
        </div>
    </div>
  )
}

export default ProjectCard