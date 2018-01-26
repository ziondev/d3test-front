import React from 'react'

const HiddenField = ({ input }) => {
  return (
    <input {...input} id={input.name} type="hidden" />
  )
}

export default HiddenField;