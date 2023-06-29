import React from 'react';
import Data from './Data.json';
import Image from 'next/image';

const Techstack = () => {
  return (
    // Tech Stack 
    <div className='my-4 w-[700px]'>
        {/* Tech Stack Title  */}
        <div className="text-[30px] text-white font-bold">
        ⚙Tech Stack,
        </div>
        {/* Tech Stack Icon  */}
        <div className="my-2 flex flex-wrap justify-center items-center">
            {
               Data.Skills.map((data) => (
                <Image src={data.path} className="mx-2 w-[50px]" width={500} height={500} key={data.id} alt="TechStackIcon"/>
               )) 
            }
        </div>
    </div>
  )
}

export default Techstack