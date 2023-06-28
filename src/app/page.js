import Image from 'next/image';
import BannerSection from './components/BannerSection';
import AboutMe from './components/AboutMe';
import Techstack from './components/Techstack';
import ProjectSection from './components/ProjectSection';

export default function Home() {
  return (
    // main section
    <section className="font-firaCode bg-[#22272e] h-auto w-auto flex justify-center items-center">
      {/* // left section */}
      <section className="h-auto w-[25%] border-2 border-red-500">
        left section
      </section>
      {/* right section  */}
      <section className="h-auto w-[75%] border-l-2 border-[#768390] flex flex-col justify-start items-center">
        <BannerSection />
        <div className="my-2 w-[970px] border-2 border-[#768390]"></div>
        <AboutMe />
        <div className="my-2 w-[970px] border-2 border-[#768390]"></div>
        <Techstack />
        <div className="my-2 w-[970px] border-2 border-[#768390]"></div>
        <ProjectSection />
      </section>
    </section>
  )
}
