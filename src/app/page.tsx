"use client";

import { ChangeEvent, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  }
  const onSubmit = () => {
    const isValidInput = !isNaN(+input);
    setIsValid(isValidInput);
    if (isValidInput) {
      alert(`Your number: ${input}`);
    }
  }
  return (
    <main className="m-auto w-screen h-screen flex">
      <div className="m-auto">
        <input className={`border-2 rounded-md text-black focus:outline-none ${isValid ? 'input-default' : 'input-error'} `} onChange={onTextChange} />
        <button className="ml-5" onMouseDown={onSubmit}>Submit</button>
      </div>
    </main>
  );
}
