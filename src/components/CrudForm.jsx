import { useState, useEffect } from 'react'

// creamos un objeto con los valores iniciales del form
const initialForm = {
    nameLink: "",
    url: "",
    color: "",
    id: null,
}

const CrudForm = ({createData, updateData, dataToEdit, setDataToEdit}) => {


    // state del estado inicial del form
    const [form, setForm] = useState(initialForm)

    // recibimos el evento del onchange
    const handleChange = (e) => {
        setForm({
            // Mantenemos el valor inicial de state
            ...form,
            // identificamos el cambio de cada input por su nombre(name) y le asignamos el valor que se escriba ane el input
            [e.target.name]: e.target.value,
        })
    }

    // Tenemos que recivir el evento en la funcion
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.nameLink || !form.url || !form.color) {
            alert("Datos incompletos")
            return;
        }

        if(form.id === null){
            createData(form)
        }else{
            updateData(form)
        }

        handleReset(e);
    }


    const handleReset = (e) => {
        e.preventDefault();
        setForm(initialForm);
        // setDataToEdit(null);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-4' action="">
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Link Name:
                    </span>
                    <input value={form.nameLink} onChange={handleChange} type="text" name="nameLink" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Facebook / Instagram / Twitter" />
                </label>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Link Url:
                    </span>
                    <input value={form.url} onChange={handleChange} type="text" name="url" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="https://www.instagram.com" />
                </label>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Link Color:
                    </span>
                    <input value={form.color} onChange={handleChange} type="text" name="color" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="#EB455F" />
                </label>
                <hr className='mt-8' />


                <button type="submit" className='btn bg-blue-500 hover:bg-blue-400 rounded-md py-2 text-white'>New Link</button>
                <button onClick={handleReset} className='btn bg-gray-500 hover:bg-gray-400 rounded-md py-2 text-white'>Reset</button>
            </form>
        </>
    )
}

export default CrudForm