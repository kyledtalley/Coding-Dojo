import { useState } from "react";
const ControlledInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <input type="text" value={value} onChange={handleChange}/>
  );
};
export default ControlledInput;
