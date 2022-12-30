import { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const initialDB = [
    {
        id: 1,
        nameLink: "Facebook",
        url: "https://www.facebook.com/",
        color: "#82AAE3"
    },
    {
        id: 2,
        nameLink: "Instagram",
        url: "https://www.instagram.com/",
        color: "#975C8D"
    },
    {
        id: 3,
        nameLink: "Twitter",
        url: "https://www.twitter.com/",
        color: "#7DE5ED"
    },
    {
        id: 4,
        nameLink: "Youtube",
        url: "https://www.youtube.com/",
        color: "#EB455F"
    },

]

const CrudApp = () => {
    const [db, setDb] = useState(initialDB);

    const [dataToEdit, setdataToEdit] = useState(null);

    const createData = (data) => {
        // console.log(data)
        data.id = Date.now();
        setDb([...db,data])
    }

    const updateData = (data) => {

    }

    const removeData = (id) => {

    }

    console.log("db", db)



    return (
        <>
            <h1 className='font-bold text-3xl mb-4 text-center'>CRUD APP</h1>
            <hr />
            <CrudForm
                createData={createData}
                updateData={updateData}
                setdataToEdit={setdataToEdit}
            />
            <CrudTable data={db}
                setdataToEdit={setdataToEdit}
                removeData={removeData}
            />
        </>
    )
}

export default CrudApp