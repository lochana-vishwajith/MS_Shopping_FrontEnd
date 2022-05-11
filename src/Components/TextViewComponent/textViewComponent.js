import React from 'react';
import PropTypes from 'prop-types';

const textView = ({
    label,
    name,
    id,
    className,
    onChange
}) => {
    return(
        <div className ="textView">
            <p id = {id} className={className} name = {name} onChange = {onChange}>{label}</p>
        </div>
    )
}

textView.propTypes = {
    label : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    className : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired,
    onChange : PropTypes.func
}

export default textView;