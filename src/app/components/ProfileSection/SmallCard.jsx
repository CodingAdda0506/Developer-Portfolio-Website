import React from 'react'

const SmallCard = ({title, date}) => {
    return (
        <div>
            <div className="my-2 px-3 py-2 rounded-lg bg-[#444c56] w-[300px]">
                <div className="font-bold text-[18px]">
                    {title}
                </div>
                <div className="font-light text-[14px]">
                    {date}
                </div>
            </div>
        </div>
    )
}

export default SmallCard