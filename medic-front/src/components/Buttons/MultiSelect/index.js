import React from 'react';

import Select from 'react-select';
import { colourOptions } from '../data';

export default ({name, option}) => (
  <Select
    // defaultValue={[colourOptions[2], colourOptions[3]]}
    isMulti
    name={name}
    options={option}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);