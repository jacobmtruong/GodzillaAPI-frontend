import { useState } from 'react';
import axios from 'axios';
import PlayMonsters from './PlayMonsters'
import '../styles/forminput.css'

const FormInput = () => {
  const [year, setYear] = useState('')
  const [name, setName] = useState('')

  const [error, setError] = useState(null)

  const [result, setResult] = useState([])



  const MonsterSubmitHandler = (e) => {
    e.preventDefault()
    if (year === '') {
      return
    }
    axios.get(`http://localhost:8000/api/monster/year/${year}`)
      .then(res => {
        if (res.data == 0) {
          setError("Cannot find the year monster was created in our database")
        } else {
        let result = res.data
        for (let i = 0; i < result.length; i++) {
          delete result[i]["_id"]
          delete result[i]["createdAt"]
          delete result[i]["updatedAt"]
          delete result[i]["__v"]
        }
        setResult(result)
      }})
      .catch(err => {
        console.log(err, { replace: true })
      })
  }

  const NameSubmitHandler = (e) => {
    e.preventDefault()
    if (name === '') {
      return
    }
    axios.get(`http://localhost:8000/api/monster/name/${name}`)
      .then(res => {
        if (res.data == 0) {
          setError("Cannot find the Monster's name in our database")
        } else {
          let result = res.data
          for (let i = 0; i < result.length; i++) {
            delete result[i]["_id"]
            delete result[i]["createdAt"]
            delete result[i]["updatedAt"]
            delete result[i]["__v"]
          }
          setResult(result)
        }
      })
      .catch(err => {
        console.log(err, { replace: true })
      })
  }



  return (
    <div className='form-container'>
      <div className='form-small-container'>
        <form onSubmit={MonsterSubmitHandler}>
          <span className='link-input'>localhost:3000/api/monster/year/</span><input style={{width: '55%'}} type="number" onChange={(e) => setYear(e.target.value)} placeholder=':year' value={year} />
          <button className='form-button'>Submit</button>
        </form>

        <form onSubmit={NameSubmitHandler}>
          <span className='link-input'>localhost:3000/api/monster/name/</span><input style={{width: '53.6%'}} type="text" onChange={(e) => setName(e.target.value)} placeholder=':name' value={name} />
          <button className='form-button'>Submit</button>
        </form>
      </div>

      <PlayMonsters result={result} error={error} />
    </div>
  )
}


export default FormInput