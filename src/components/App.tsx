
import * as React from 'react';
import { Festivals } from './Festivals'

export function App() {
  const [festivals, setFestivals] = React.useState([])
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(process.env.MUSIC_FESTIVALS_URL)
    .then(res => res.json())
    .then(response => {
      setFestivals(response.festivals)
      setLoading(false)
    })
    .catch((error) => console.log(error))
  }, [])

  if (loading) {
    return (
      <div>Loading ...</div>
    )
  }
  if (!Array.isArray(festivals) || festivals.length === 0) {
    return (
      <div> Something has gone wrong, please refresh or try after some time</div>
    )
  }
  return <Festivals festivals={festivals} />
}
