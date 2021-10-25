import React from 'react';
import PropTypes from "prop-types";
import './RadioColor.css'

function RadioColor({value, selected, onChange}) {

    return (
        <div
            className="modern-radio-container"
            onClick={() => {
                onChange(value);
            }}
        >
            <div
                className={`radio-outer-circle ${value !== selected && "unselected"}`}
                style={(value !== selected)?{background: value} : {border: `1px solid ${value}`, boxShadow: `0 0 1px 3px ${value}85`}}
            >
                <div
                    className={`radio-inner-circle ${value !== selected &&
                    "unselected-circle"}`}
                    style={(value === selected)?{background: value} : {}}
                />
            </div>
        </div>
    );
}

RadioColor.propTypes = {
    onChange: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default RadioColor;