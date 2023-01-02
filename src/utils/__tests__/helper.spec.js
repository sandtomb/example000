import { describe, it, expect } from 'vitest'
import addTwo from '../helper'

describe('addTwo', () => {
  const testCases = [
    {
      data: 10,
      expected: 12,
    },
    {
      data: -6,
      expected: -4,
    },
    {
      data: 0,
      expected: 2,
    },
  ]

  testCases.forEach((testCase) => {
    it('returns correct value', () => {
      expect(addTwo(testCase.data)).toEqual(testCase.expected)
    })
  })

  it('throws exception when given a non number', () => {
    expect(() => addTwo('test')).toThrowError()
  })
})
