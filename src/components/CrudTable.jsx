import React from 'react'
import LInkUser from './LInkUser'

// const color = '#7B2869'


const CrudTable = ({ data }) => {

    // console.log("data", data)

    return (
        <>
            <div className='mt-14'></div>
            <h1 className='font-bold text-2xl mx-auto text-center mb-6'>Your Links</h1>
            <div>
                {data.length === 0 ? <span className='mx-auto'> <p className='text-center'>No data available</p></span> : <div>{
                    data.map((link, index) =>
                        <LInkUser key={index} data={link} />
                    )
                }</div>}
            </div>


        </>
    )
}

export default CrudTable