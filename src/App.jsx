import './App.css'
import { TimeRow } from './components/TimeRow'
import { useState } from 'react'

function App () {
  const [timeRowList, setTimeRowList] = useState([{ hours: 0, minutes: 0, seconds: 0 }])
  const [totalTime, setTotalTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [timeString, setTimeString] = useState('00:00:00')

  const getTimeRow = (key, hours, minutes, seconds) => {
    const newTimeRowList = [...timeRowList]
    newTimeRowList[key] = { hours: parseInt(hours), minutes: parseInt(minutes), seconds: parseInt(seconds) }
    setTimeRowList(newTimeRowList)

    const totalTime = getTotalTime(newTimeRowList)
    const timeString = `${String(totalTime.hours).padStart(2, '0')}:${String(totalTime.minutes).padStart(2, '0')}:${String(totalTime.seconds).padStart(2, '0')}`
    setTimeString(timeString)
  }

  const addTimeRow = () => {
    setTimeRowList([...timeRowList, { hours: 0, minutes: 0, seconds: 0 }])
  }

  return (
    <>
      <h1>Time calculator</h1>
      {timeRowList.map((_, i) => <TimeRow key={i} index={i} onTimeChange={getTimeRow} />)}

      <div className='flex flex-row'>
        <h2>Time: </h2>
        <p>{timeString}</p>
      </div>
      <button onClick={addTimeRow}>Add</button>
    </>
  )
}

export default App
