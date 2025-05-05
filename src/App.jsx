import './App.css'
import { TimeRow } from './components/TimeRow'
import { useState } from 'react'
import { substractTime, addTime, parseTime } from './services/timeService'

function App () {
  const [timeRowList, setTimeRowList] = useState([{ hours: 0, minutes: 0, seconds: 0 }])
  const [totalTime, setTotalTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
  const [timeString, setTimeString] = useState('00:00:00')

  const getTimeRow = (key, hours, minutes, seconds) => {
    const newTimeRowList = [...timeRowList]
    let tempTotalTime = { ...totalTime }
    const timeRow = parseTime({ hours, minutes, seconds })

    tempTotalTime = substractTime({ totalTime: tempTotalTime, substractTimeObj: newTimeRowList[key] })
    tempTotalTime = addTime({ totalTime: tempTotalTime, addTime: timeRow })
    newTimeRowList[key] = timeRow
    setTimeRowList(newTimeRowList)
    setTotalTime(tempTotalTime)

    const timeString = `${String(tempTotalTime.hours).padStart(2, '0')}:${String(tempTotalTime.minutes).padStart(2, '0')}:${String(tempTotalTime.seconds).padStart(2, '0')}`
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
