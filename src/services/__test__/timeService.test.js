import { describe, it, expect } from 'vitest'
import { substractTime, addTime, getTotalTime, parseTime } from '../timeService'

describe('TimeService', () => {
  it('Should remain equal when substracting 0', () => {
    const totalTime = { hours: 1, minutes: 2, seconds: 3 }
    const substractTimeObj = { hours: 0, minutes: 0, seconds: 0 }
    const result = substractTime({ totalTime, substractTimeObj })
    expect(result).toEqual(totalTime)
  })

  it('Should substract time correctly', () => {
    const totalTime = { hours: 1, minutes: 2, seconds: 3 }
    const substractTimeObj = { hours: 0, minutes: 1, seconds: 2 }
    const result = substractTime({ totalTime, substractTimeObj })
    expect(result).toEqual({ hours: 1, minutes: 1, seconds: 1 })
  })

  it('Should substract time correctly with seconds overflow', () => {
    const totalTime = { hours: 1, minutes: 2, seconds: 3 }
    const substractTimeObj = { hours: 0, minutes: 0, seconds: 4 }
    const result = substractTime({ totalTime, substractTimeObj })
    expect(result).toEqual({ hours: 1, minutes: 1, seconds: 59 })
  })

  it('Should substract time correctly with minutes overflow', () => {
    const totalTime = { hours: 1, minutes: 2, seconds: 3 }
    const substractTimeObj = { hours: 0, minutes: 3, seconds: 0 }
    const result = substractTime({ totalTime, substractTimeObj })
    expect(result).toEqual({ hours: 0, minutes: 59, seconds: 3 })
  })

  it('Should add time correctly', () => {
    const totalTime = { hours: 1, minutes: 2, seconds: 3 }
    const addTimeObj = { hours: 0, minutes: 1, seconds: 2 }
    const result = addTime({ totalTime, addTime: addTimeObj })
    expect(result).toEqual({ hours: 1, minutes: 3, seconds: 5 })
  })

  it('Should add time correctly with seconds overflow', () => {
    const totalTime = { hours: 1, minutes: 2, seconds: 59 }
    const addTimeObj = { hours: 0, minutes: 0, seconds: 2 }
    const result = addTime({ totalTime, addTime: addTimeObj })
    expect(result).toEqual({ hours: 1, minutes: 3, seconds: 1 })
  })

  it('Should add time correctly with minutes overflow', () => {
    const totalTime = { hours: 1, minutes: 59, seconds: 3 }
    const addTimeObj = { hours: 0, minutes: 2, seconds: 0 }
    const result = addTime({ totalTime, addTime: addTimeObj })
    expect(result).toEqual({ hours: 2, minutes: 1, seconds: 3 })
  })

  it('Should add time correctly with hours overflow', () => {
    const totalTime = { hours: 23, minutes: 59, seconds: 59 }
    const addTimeObj = { hours: 1, minutes: 0, seconds: 2 }
    const result = addTime({ totalTime, addTime: addTimeObj })
    expect(result).toEqual({ hours: 25, minutes: 0, seconds: 1 })
  })

  it('Should calculate total time correctly', () => {
    const timeList = [
      { hours: 1, minutes: 2, seconds: 3 },
      { hours: 0, minutes: 58, seconds: 59 },
      { hours: 2, minutes: 0, seconds: 1 }
    ]
    const result = getTotalTime({ timeList })
    expect(result).toEqual({ hours: 4, minutes: 1, seconds: 3 })
  })

  it('Should handle empty time list', () => {
    const timeList = []
    const result = getTotalTime({ timeList })
    expect(result).toEqual({ hours: 0, minutes: 0, seconds: 0 })
  })

  it('Should handle time overflow correctly', () => {
    const timeList = [
      { hours: 0, minutes: 59, seconds: 59 },
      { hours: 0, minutes: 0, seconds: 2 }
    ]
    const result = getTotalTime({ timeList })
    expect(result).toEqual({ hours: 1, minutes: 0, seconds: 1 })
  })

  it('Should parse zero time correctly', () => {
    const result = parseTime({ hours: 0, minutes: 0, seconds: 0 })
    expect(result).toEqual({ hours: 0, minutes: 0, seconds: 0 })
  })

  it('Should parse empty strings correctly', () => {
    const result = parseTime({ hours: '', minutes: '', seconds: '' })
    expect(result).toEqual({ hours: 0, minutes: 0, seconds: 0 })
  })
})
