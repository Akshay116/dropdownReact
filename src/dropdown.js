import { useState } from "react";
function Dropdown({ selected, setSelected }) {
  const [isActive, setIsActive] = useState(false); // hook for hovering effect 
  const options = ["Options", "Custom", "Array", "Dropdown"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onMouseEnter={() => setIsActive(!isActive)}>
         
        {/* onMouseLeave={() => setIsActive(!isActive)} */}
        
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item">
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
