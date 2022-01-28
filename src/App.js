import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(80);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);

  function calculate(e) {
    e.preventDefault();
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);

    let alcoholBloodLevel = 0;
    if (gender === 'male') {
      alcoholBloodLevel = gramsLeft / (weight * 0.7);
    } else {
      alcoholBloodLevel = gramsLeft / (weight * 0.6);
    }

    if (alcoholBloodLevel < 0) {
      alcoholBloodLevel = 0;
    }

    setResult(alcoholBloodLevel);
  }
  

  return (
    <form onSubmit={calculate}>
      <h3>Calculating alcohol blood level</h3>
      <div className='edited'>
        <label>Weight</label>
        <input
          type="number"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
      </div>
      <div className='edited'>
        <label>Bottles</label>
        <select name="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className='edited'>
        <label>Time</label>
        <select name="time" value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Gender </label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/>
        <label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/>
        <label>Female</label>
      </div>
      <div id='result'>
        <label><strong>Alcohol blood level: </strong></label>
        <output>{result.toFixed(1)}</output>
      </div>
      <button>Calculate</button>
    </form>
  );
}

export default App;
