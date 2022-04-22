import "./style.css";
import Dropdown from "./dropdown";
import { useState } from "react"; //using hook to show selected item from dropdwon 
export default function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
      {/* custom dropdown menu */}
      <Dropdown selected={selected} setSelected={setSelected} />

      {/* <br />
      <br />
      <br />
     */}
    </div>
  );
  
}
