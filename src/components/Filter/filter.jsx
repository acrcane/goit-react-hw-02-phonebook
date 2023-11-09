import PropTypes from 'prop-types';
import React from 'react';
import {Label, Input } from './Filter.styled'

const Filter = ({ value, onChange }) => {
    return (
        <Label>
            Find contacts by name
            <Input type="text" value={value} onChange={onChange}></Input>
        </Label>
    );
};

export default Filter;

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};