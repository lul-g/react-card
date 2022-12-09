import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let poem_cont = document.querySelector(".poem-container");
    let poem = document.querySelector(".poem-container .poem");
    let lines = document.querySelectorAll(".line");
    let k = 0;
    let n = 0.1;
    let i = 0;
    lines.forEach((line) => {
      line.style.transitionDelay = `${n++}s`;
    });
    setInterval(() => {
      k = k < -1050 ? 100 : k - 0.07;
      poem.style.transform = `translateY(${k}px)`;
      setInterval(() => {
        lines[i++].style.opacity = "1";
      }, 1000);
    });
  });
  return (
    <div className='App'>
      <h1>A fatty poem</h1>

      <div className='poem-container'>
        <ul className='poem'>
          <li className='line-1 line'>Up from their glory</li>
          <li className='line-2 line'>They all laugh at me</li>
          <li className='line-3 line'>then they say its just a joke</li>
          <li className='line-4 line'>only to turn and mock me</li>
          <li className='line-5 line'>
            they frown, they laugh, they cheer my undoing
          </li>
          <li className='line-6 line'>from their high chairs they judge,</li>
          <li className='line'> lul what r u doing?</li>
          <li className='line-7 line'>and to them what shall I say</li>
          <li className='line-8 line'>Shall I bow to accept their mockery</li>
          <li className='line-9 line'>or raise my limbs on their facia</li>
          <li className='line-10 line'>to face jail, more misery</li>
          <li className='line-11 line'>hmmm...?</li>
          <li className='line-12 line'>but I know better</li>
          <li className='line-13 line'>
            i know not to bow down or smash my enemy
          </li>
          <li className='line-14 line'>
            for only hell awaits in that path to victory
          </li>
          <li className='line-15 line'>but I am no fool to sit around</li>
          <li className='line-16 line'>when a fool is made of me</li>
          <li className='line-17 line'>
            i shall bethrow them from their throne,
          </li>
          <li className='line-17 line'>dethrone them from glory</li>
          <li className='line-18 line'>
            for only through power can I mock their victory
          </li>
          <li className='line-19 line'>
            for only then would it be noble, to forgive my enemy
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
