import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const Monsters = () => {

    const { input } = useParams()

    const [result, setResult] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${input}`)
            .then(res => {
                let result = res.data
                for (let i = 0; i < result.length; i++) {
                    delete result[i]["_id"]
                    delete result[i]["createdAt"]
                    delete result[i]["updatedAt"]
                    delete result[i]["__v"]
                }
                setResult(result)
            })
            .catch(err => { console.log(err, { replace: true }) })

    }, [input])

    return (
        <div>
            {
                <pre>{JSON.stringify(result,null,1)}</pre>
            }
        </div>
    )
}

export default Monsters