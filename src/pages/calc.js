import "./calc.css";
import React from 'react'


const Calc = () => {
  return (
    <div className="macbook-air-1">
      
      <div className="ci-calc">
        <div className="rectangle-div3" />
        <img className="rectangle-icon" alt="" src="../rectangle-4.svg" />
        <input className="a" type="text" placeholder="A" />
        <h1 className="h1">=</h1>
        <input className="p" type="text" placeholder="P" />
        <div className="div">(</div>
        <div className="div1">1</div>
        <div className="div2">+</div>
        <input className="r" type="text" placeholder="R" />
        <div className="div3">100</div>
        <div className="div4">)</div>
        <div className="n">n</div>
        <div className="line-div" />
        <button className="rectangle-button" />
        <div className="calculate">CALCULATE</div>
      </div>
    </div>
  );
};
  
export default Calc;
