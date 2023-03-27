import React from 'react';
import PropTypes from 'prop-types'

  

type buttonType = {
    text: String;
    color: any;
    onClick: (value: any) => void;
    //onClick: any;
}

const Button = ({color, text, onClick}: buttonType) => {
    return (
  <button onClick = {onClick}style = {{backgroundColor: color}}
  className = 'btn'> {text} </button>
  )
}

Button.defaultProps = {
    color: 'aqua',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
