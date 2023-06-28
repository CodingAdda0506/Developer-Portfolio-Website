import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  return (
    // Project Main Section 
    <div className='my-4 text-white w-[850px] flex flex-col justify-center items-start'>
        {/* Project Title  */}
        <div className="text-[30px] text-white font-bold">
        💻Projects,
        </div>
        {/* Project Cards  */}
        <div className="mt-2 grid grid-cols-2 gap-4">
            <ProjectCard title="YOUTUBE CLONE" desc="This React JS app hosted on Netlify allows users to search and explore videos by content creators, genres, and types, leveraging Rapid API's V3 YouTube API for a diverse viewing experience." githubLink="" demo="" />
            <ProjectCard title="YOUTUBE CLONE" desc="This React JS app hosted on Netlify allows users to search and explore videos by content creators, genres, and types, leveraging Rapid API's V3 YouTube API for a diverse viewing experience." githubLink="" demo="" />
            <ProjectCard title="YOUTUBE CLONE" desc="This React JS app hosted on Netlify allows users to search and explore videos by content creators, genres, and types, leveraging Rapid API's V3 YouTube API for a diverse viewing experience." githubLink="" demo="" />
            <ProjectCard title="YOUTUBE CLONE" desc="This React JS app hosted on Netlify allows users to search and explore videos by content creators, genres, and types, leveraging Rapid API's V3 YouTube API for a diverse viewing experience." githubLink="" demo="" />
            <ProjectCard title="YOUTUBE CLONE" desc="This React JS app hosted on Netlify allows users to search and explore videos by content creators, genres, and types, leveraging Rapid API's V3 YouTube API for a diverse viewing experience." githubLink="" demo="" />
            <ProjectCard title="YOUTUBE CLONE" desc="This React JS app hosted on Netlify allows users to search and explore videos by content creators, genres, and types, leveraging Rapid API's V3 YouTube API for a diverse viewing experience." githubLink="" demo="" />
        </div>
    </div>
  )
}

export default ProjectSection