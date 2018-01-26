import React from 'react';
import Select from 'react-select';

const classNames = require('classnames')

const SelectField = ({ input, label, options, searchable, type, meta: { touched, error, warning } }) => {
  const htmlClasses = classNames({
    'has-error has-feedback': touched && error,
    'form-group': true
  })
  const ariaLabel = touched && error ? error : ''

  for (const index of options) {
    if(index.selected) {
      input.value = index
      break
    }
  }

  return (
    <div className={htmlClasses}>
      {label && <label htmlFor={input.name} className="control-label">{label}</label>}
      <div className="fieldset__aligner">
        <Select
          {...input}
          id={input.name}
          aria-label={ariaLabel}
          clearable={false}
          noResultsText="Ops..."
          placeholder=""
          searchable={searchable}
          autosize={false}
          options={options}
        />
        {touched && (error && <i className="glyphicon glyphicon-exclamation-sign form-control-feedback" aria-hidden="true"></i>)}
      </div>
    </div>
  );
}

export default SelectField;