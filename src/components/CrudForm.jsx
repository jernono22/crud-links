import { useState, useEffect } from 'react'

// creamos un objeto con los valores iniciales del form
const initialForm = {
    linkName: "",
    linkUrl: "",
    linkColor: "",
    id: null,
}

const CrudForm = () => {


    // state del estado inicial del form
    const [form, setForm] = useState(initialForm)


    const handleChange = () => {

    }
    const handleSubmit = () => {

    }
    const handleReset = () => {

    }
    return (
        <>
            <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-4' action="">
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Link Name:
                    </span>
                    <input value={form.linkName} onChange={handleChange} type="text" name="linkName" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Facebook / Instagram / Twitter" />
                </label>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Link Url:
                    </span>
                    <input value={form.linkUrl} onChange={handleChange} type="text" name="linkUrl" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="https://www.instagram.com" />
                </label>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Link Color:
                    </span>
                    <input value={form.linkColor} onChange={handleChange} type="text" name="linkColor" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="#EB455F" />
                </label>
                <hr className='mt-8' />
                <button className='btn bg-blue-500 hover:bg-blue-400 rounded-md py-2 text-white'>Subir</button>
                <button onClick={handleReset} className='btn bg-gray-500 hover:bg-gray-400 rounded-md py-2 text-white'>Reset</button>


            </form>
        </>
    )
}

export default CrudForm