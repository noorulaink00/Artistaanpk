import React, { useState } from "react";

const CheckBox = ({ id, name, label, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState, id);
  };
  {
    /*const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange(newCheckedState, name);
  };
  */
  }

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default CheckBox;
{
  /*const CheckBox = (props) => {
  const [checked, setChecked] = useState(false);
  const { onChange, id, ...checkboxProps } = props;

  const handleCheckboxChange = () => {
    setChecked(!checked);
    onChange && onChange(!checked);
  };

  return (
    <div className="checkbox">
      <label htmlFor={id} className="checkbox-label">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          {...checkboxProps}
        />
        <span className="checkmark"></span>
        <span className="checkbox-text">{props.label}</span>
      </label>
    </div>
  );
};*/
}
