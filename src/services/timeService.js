const floorTime = ({ time }) => {
  if (time.seconds >= 60) {
    time.minutes += Math.floor(time.seconds / 60)
    time.seconds = time.seconds % 60
  }
  if (time.minutes >= 60) {
    time.hours += Math.floor(time.minutes / 60)
    time.minutes = time.minutes % 60
  }
  return time
}

export const getTotalTime = ({ timeList }) => {
  return floorTime({
    time: timeList.reduce((acc, row) => {
      acc.hours += row.hours
      acc.minutes += row.minutes
      acc.seconds += row.seconds
      return acc
    }, { hours: 0, minutes: 0, seconds: 0 })
  })
}

export const substractTime = ({ totalTime, substractTimeObj }) => {
  const newTotalTime = { ...totalTime }

  if (newTotalTime.seconds < substractTimeObj.seconds) {
    newTotalTime.seconds += 60
    newTotalTime.minutes -= 1
  }

  if (newTotalTime.minutes < substractTimeObj.minutes) {
    newTotalTime.minutes += 60
    newTotalTime.hours -= 1
  }

  newTotalTime.hours -= substractTimeObj.hours
  newTotalTime.minutes -= substractTimeObj.minutes
  newTotalTime.seconds -= substractTimeObj.seconds

  return floorTime({ time: newTotalTime })
}

export const addTime = ({ totalTime, addTime }) => {
  const newTotalTime = { ...totalTime }
  newTotalTime.hours += addTime.hours
  newTotalTime.minutes += addTime.minutes
  newTotalTime.seconds += addTime.seconds

  return floorTime({ time: newTotalTime })
}
