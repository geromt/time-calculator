import './App.css'
import { TimeRow } from './components/TimeRow'
import { useState } from 'react'

function App () {
  const [timeString, setTimeString] = useState('00:00:00')

  const getTimeRow = (hours, minutes, seconds) => {
    const time = new Date()
    time.setHours(hours)
    time.setMinutes(minutes)
    time.setSeconds(seconds)
    const timeString = time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    setTimeString(timeString)
  }

  return (
    <>
      <h1>Time calculator</h1>
      <TimeRow onTimeChange={getTimeRow} />
      <div className='flex flex-row'>
        <h2>Time: </h2>
        <p>{timeString}</p>
      </div>
    </>
  )
}

export default App
