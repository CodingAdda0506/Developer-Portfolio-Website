import React from 'react'
import SmallCard from './SmallCard'

const Experience = () => {
    return (
        <div>
            <section className="text-white font-firaCode flex flex-col justify-center items-center">
                <div className="font-bold text-[30px]">
                    Experience
                </div>
                <div className="flex flex-col justify-center items-center">
                    <SmallCard title="SDE @ Google" date="15-06-2023" />
                    <SmallCard title="SDE @ Microsoft" date="15-06-2023" />
                    <SmallCard title="SDE @ Raw Engineering" date="15-06-2023" />
                    <SmallCard title="SDE @ Coding Adda" date="15-06-2023" />
                </div>
            </section>
        </div>
    )
}

export default Experience