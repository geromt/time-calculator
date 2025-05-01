import { useState } from 'react'

export function TimeRow ({ onTimeChange }) {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  return (
    <div className='flex flex-row'>
      <input
        name='hours' type='number' value={hours} onChange={(e) => {
          setHours(e.target.value)
          onTimeChange(e.target.value, minutes, seconds)
        }}
      />
      <input
        name='minutes' type='number' value={minutes} onChange={(e) => {
          setMinutes(e.target.value)
          onTimeChange(hours, e.target.value, seconds)
        }}
      />
      <input
        name='seconds' type='number' value={seconds} onChange={(e) => {
          setSeconds(e.target.value)
          onTimeChange(hours, minutes, e.target.value)
        }}
      />
    </div>
  )
}
