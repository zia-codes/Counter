import { useState } from "react";
import "./App.css";
export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
      <Counter />
    </div>
  );
}

const message = ["Learn React", "Apply for jobs", "Invest your new income"];
function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);
  // const [test, setTest] = useState({ name: "Zia" });

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // setTest({ name: "Zia" });
  }
  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
    // test.name = "Hadia";
    // setTest({ name: "Hadia" });
  }
  return (
    <div>
      <button className="close " onClick={() => setisOpen((is) => !is)}>
        x
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Steps {step}: {message[step - 1]}
            {/* {test.name} */}
          </p>
          <div className="buttons">
            <Button bgColor='#7950f2' textColor='#fff' onClick={handlePrevious}><span>👈</span>Previous</Button>
            <Button bgColor='#7950f2' textColor='#fff' onClick={handleNext}>Next<span>👉</span></Button>
           
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
              style={{ backgroundColor: bgColor, color: textColor }}
              onClick={onClick}
            >
              {children}
            </button>
  ) 
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("Nov 22 2025");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button
          className="bg-black text-white border-2 border-amber-300 p-1 m-1"
          onClick={() => setStep((c) => c - 1)}
        >
          -
        </button>
        <span>Steps: {step}</span>
        <button
          className="bg-black text-white border-2 border-amber-300 p-1 m-1"
          onClick={() => setStep((c) => c + 1)}
        >
          +
        </button>
      </div>
      <div>
        <button
          className="bg-black text-white border-2 border-amber-300 p-1 m-1"
          onClick={() => setCount((c) => c - step)}
        >
          -
        </button>
        <span>count: {count}</span>
        <button
          className="bg-black text-white border-2 border-amber-300 p-1 m-1"
          onClick={() => setCount((c) => c + step)}
        >
          +
        </button>
      </div>
      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        {date.toDateString()}
      </p>
    </div>
  );
}
