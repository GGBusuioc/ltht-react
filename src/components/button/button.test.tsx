import React from 'react'
import ReactDOM from 'react-dom'

import Button from './index'

describe('button', () => {
  describe('basics', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(<Button>Example</Button>, div)
    })
  })
})
