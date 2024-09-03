import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

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
    // fetchPhoto()
    setApod({
      "date": "2024-09-03",
      "explanation": "Nine days ago, two quite different sky icons were imaged rising together. Specifically, Earth's Moon shared the eastern sky with the sister stars of the Pleiades cluster, as viewed from Alberta, Canada.  Astronomical images of the well-known Pleiades often show the star cluster's alluring blue reflection nebulas, but here they are washed-out by the orange moonrise sky. The half-lit Moon, known as a quarter moon, is overexposed, although the outline of the dim lunar night side can be seen by illuminating earthshine, light first reflected from the Earth. The featured image is a composite of eight successive exposures with brightnesses adjusted to match what the human eye would see.  The Moon passes nearly -- or directly -- in front of the Pleaides once a month.",
      "hdurl": "https://apod.nasa.gov/apod/image/2409/MoonPleiades_Dyer_2048.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Quarter Moon and Sister Stars",
      "url": "https://apod.nasa.gov/apod/image/2409/MoonPleiades_Dyer_960.jpg"
    })
  }, [])
  if (!apod) return 'Fetching Photo of the Day...'
  return (
    <section>
      <Card
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      />
    </section>
  )
}

export default App
