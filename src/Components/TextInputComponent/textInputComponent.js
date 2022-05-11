import React from 'react';
import classname from 'classnames';
import PropTypes from 'prop-types';

const textInput = ({
    type,
    textFeildName,
    placeholder,
    name,
    value,
    onChange
}) => {
    return(
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm"><b>{textFeildName}</b></span>
        </div>
        <input type={type} class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder={placeholder} name={name} value = {value} onChange={onChange}/>
        </div>
    )
}

textInput.prototype ={
    type : PropTypes.string.isRequired,
    textFeildName : PropTypes.string.isRequired,
    placeholder : PropTypes.string.isRequired,
    name : PropTypes.string,
    value : PropTypes.string,
    onChange : PropTypes.func
}

export default textInput;