import {useRef} from "react";
const UncontrolledInput = () => {
  const ref = useRef(null);
  return (
    <input type="text" ref={ref}/>
  );
};
export default UncontrolledInput;

