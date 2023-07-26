import React, { useState } from "react";
import "./input.css";
function Input(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...input } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className='input'>
      <label>{label}</label>
      <input
        {...input}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => input.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}
// const [focused, setFocused] = useState(false);
// const { label, errorMessage, onChange, id, ...inputProps } = props;

// const handleFocus = (e) => {
//   setFocused(true);
// };

// return (
//   <div className='formInput'>
//     <label>{label}</label>
//     <input
//       {...inputProps}
//       onChange={onChange}
//       onBlur={handleFocus}
//       onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
//       focused={focused.toString()}
//     />
//     <span>{errorMessage}</span>
//   </div>
// );

export default Input;
