
import {useId} from "react";

const Input = ({label, type = "text", className = "", ref, ...props}) => {
  const id = useId();
  return (
    <div>
      {label && (
        <label className={`inline-block mb-1 pl-1`} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={text}
        className={` border w-20 p-2 ${className}`}
        ref={ref}
        {...props}
      />
    </div>
  );
};

export default Input;
