import { useState } from "react";
import "./index.css";
import Break from "./Break";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");

  return (
    <div className="bg-black flex items-center justify-center h-screen space-x-50 space-y-20 flex-col">
      <h1 className="text-white text-9xl ">breakify</h1>
      <Break
        firstName={firstName}
        middleName={middleName}
        lastName={lastName}
      />
      <div className="flex space-x-20 ">
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
          type="text"
          placeholder="first name"
          className="input"
        />
        <input
          onChange={(e) => {
            setMiddleName(e.target.value);
          }}
          value={middleName}
          type="text"
          placeholder="middle name"
          className="input"
        />
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
          type="text"
          placeholder="last name"
          className="input"
        />
      </div>
    </div>
  );
}

export default App;
