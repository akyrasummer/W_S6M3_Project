import React, { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = 'DEMO_KEY'
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  const [apod, setApod] = useState()
useEffect(() => {
  function fetchPhoto() {
    axios.get(URL)
    .then(res => {
      console.log(res.data)
      setApod(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  }
  fetchPhoto()
   setApod()
}, [])
return (
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
  )
}

export default App
