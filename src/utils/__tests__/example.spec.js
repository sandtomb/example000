import { describe, it, expect } from 'vitest'
import { CustomList, evaluateForEven } from '../example'

describe('evaluateForEven', () => {
  const testCases = [
    {
      data: new CustomList([3, 7, 4]),
      expected: true,
    },
    {
      data: new CustomList([3, 7, 9, 11, 8]),
      expected: true,
    },
    {
      data: new CustomList([]),
      expected: false,
    },
    {
      data: new CustomList([0]),
      expected: false,
    },
    {
      data: new CustomList([1, 7, 0]),
      expected: false,
    },
  ]

  testCases.forEach((testCase) => {
    it('returns the correct evaluation', () => {
      expect(evaluateForEven(testCase.data)).toEqual(testCase.expected)
    })
  })

  it('throws exceptions when given non CustomList', () => {
    expect(() => evaluateForEven('test')).toThrowError()
  })
})
