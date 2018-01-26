import React from 'react'

const classNames = require('classnames')

const TextField = ({ input, label, type, placeholder, maxLength, meta: { touched, error, warning } }) => {
  const htmlClasses = classNames({
    'has-error has-feedback': touched && error,
    'form-group': true
  })
  const ariaLabel = touched && error ? error : '';

  return (
    <div className={htmlClasses}>
      {label && <label htmlFor={input.name} className="control-label">{label}</label>}
      <div className="fieldset__aligner">
        <input {...input} id={input.name} placeholder={placeholder} maxLength={maxLength} size={maxLength} type={type} className="form-control" aria-label={ariaLabel} />
        {touched && (error && <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>)}
      </div>
    </div>
  )
}

export default TextField;