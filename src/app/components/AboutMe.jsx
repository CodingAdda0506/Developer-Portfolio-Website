import React from 'react'

const AboutMe = () => {
    return (
        // About section 
        <div className="my-4 w-[850px]">
            {/* About section title  */}
            <div className="text-[30px] text-white font-bold">
                👨🏻‍💻About Me,
            </div>
            {/* About section detail  */}
            <div className="text-white">
                <div className="">
                    💡 I like to explore data science and Machine Learning and develop solutions.
                </div>
                <div className="">
                    🎓 I'm currently studying Information Technology at the University of Mumbai.
                </div>
                <div className="">
                    🌱 I'm on track for learning more about Machine Learning, DevOps, and JavaScript Frameworks.
                </div>
                <div className="">
                    ✍️ In my free time, I pursue Travelling and Content Creation as side hustles.
                </div>
                <div className="">
                    💬 Feel free to reach out to me for collaboration, or just for some interesting discussion.
                </div>
                <div className="">
                    ✉️ You can send me an email at letstalkaditya @gmail.com. I'll try to respond as soon as I can.
                </div>
                <div className="">
                    📄 My Résumé for more details about me.I'm open to feedback and suggestions!
                </div>
            </div>
        </div>
    )
}

export default AboutMe