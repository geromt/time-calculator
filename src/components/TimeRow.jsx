import { useState } from 'react'

export function TimeRow ({ index, onTimeChange }) {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  return (
    <>
      <input
        name='hours' type='number' min='0' className='text-center' value={hours} onChange={(e) => {
          setHours(e.target.value)
          onTimeChange(index, e.target.value, minutes, seconds)
        }}
      />
      <input
        name='minutes' type='number' min='0' max='60' className='text-center' value={minutes} onChange={(e) => {
          setMinutes(e.target.value)
          onTimeChange(index, hours, e.target.value, seconds)
        }}
      />
      <input
        name='seconds' type='number' min='0' max='60' className='text-center' value={seconds} onChange={(e) => {
          setSeconds(e.target.value)
          onTimeChange(index, hours, minutes, e.target.value)
        }}
      />
    </>
  )
}
