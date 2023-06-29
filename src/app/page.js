import Image from 'next/image';
import BannerSection from './components/BannerSection';
import AboutMe from './components/AboutMe';
import Techstack from './components/Techstack';
import ProjectSection from './components/ProjectSection';
import About from './components/ProfileSection/About';
import Social from './components/ProfileSection/Social';

export default function Home() {
  return (
    // main section
    <section className="font-firaCode bg-[#22272e] h-auto w-auto flex justify-center items-center">
      {/* // left section */}
      <section className="h-[250vh] w-[25%] flex flex-col justify-center items-center">
        <About />
        <div className="my-2 w-[300px] border-2 border-[#768390]"></div>
        <Social />
        <div className="my-2 w-[300px] border-2 border-[#768390]"></div>

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
