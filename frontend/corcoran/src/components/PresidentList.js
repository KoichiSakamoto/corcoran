import React from 'react';

const PresidentList = (props) =>
  <ul className="pres-list">
    {props.displayPresidents()}
  </ul>

export default PresidentList;
