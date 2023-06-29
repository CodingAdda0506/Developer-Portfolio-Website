import React from 'react'
import SmallCard from './SmallCard'

const Achievements = () => {
    return (
        <section className="text-white font-firaCode flex flex-col justify-center items-center">
            <div className="font-bold text-[30px]">
                Achivements
            </div>
            <div className="flex flex-col justify-center items-center">
                <SmallCard title="1st price at MumbaiHackathon" date="23-06-2019" />
                <SmallCard title="Participated in AppWrite Hackathon" date="15-06-2023" />
                <SmallCard title="1st price at MumbaiHackathon" date="23-06-2019" />
                <SmallCard title="Participated in AppWrite Hackathon" date="15-06-2023" />
            </div>
        </section>
    )
}

export default Achievements