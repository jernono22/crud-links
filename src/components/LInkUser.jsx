import React from 'react'

const LInkUser = ({ data }) => {

// console.log(data)
    return (
        <>
            <div className="link w-full mt-2 grid grid-cols-2 gap-2">
                <a target="_blank" href={data.url} >
                    <button style={{ backgroundColor: data.color }} className={`btn rounded-md py-2 text-white w-full`}>
                        {data.nameLink}
                    </button>
                </a>
                <div className='grid grid-cols-2 gap-2'>
                    <button className={`btn bg-blue-500 rounded-md py-2 text-white w-full`}>Edit Link</button>
                    <button className={`btn bg-red-500 rounded-md py-2 text-white w-full`}>Delete Link</button>
                </div>
            </div>

        </>
    )
}

export default LInkUser