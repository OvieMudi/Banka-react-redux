import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    type, label, id, className, name, value, placeholder, required,
  } = props;

  let inputElement = null;

  switch (type) {
    case 'textarea':
      inputElement = (
        <textarea
          id={id}
          className={className}
          name={name}
          value={value}
          required={required}
        />
      );
      break;
    default:
      inputElement = (
        <input
          type="text"
          id={id}
          className={className}
          name={name}
          value={value}
          required={required}
          placeholder={placeholder}
        />
      );
  }

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      {inputElement}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool.isRequired,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
