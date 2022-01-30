import { useState } from 'react';
import Result from './Result'
const InputField = ({ circleField, squareField, rectangleField, triangleField, onResult}) => {

  const [radius, setRadius] = useState(0)
  const [side, setSide] = useState(0)
  const [length, setLength] = useState(0)
  const [width, setWidth] = useState(0)
  const [base, setBase] = useState(0)
  const [height, setHeight] = useState(0)
  const [answer, setAnswer] = useState(0)
  console.log("🚀 ~ file: InputField.js ~ line 12 ~ InputField ~ answer", answer)


  const onSubmit = (e) => {
    e.preventDefault();

    if(circleField){
      setAnswer(Math.PI * Math.pow(radius, 2));
    } else if(squareField){
      setAnswer(Math.pow(side, 2))
    } else if(rectangleField){
      setAnswer(length * width)
    } else {
      setAnswer((base * height)/2)
    }
  }

  return (
    <>
    <form onSubmit={onSubmit}>
        {circleField && <label>Radius: </label>}
        {circleField && <input type='number' placeholder=" Input radius here" value={radius} onChange={(e) => setRadius(e.target.value)}/>}
        {squareField && <label>Side: </label>}
        {squareField && <input type="number" placeholder=' Input side length here' value={side} onChange={(e) => setSide(e.target.value)}/>}
        {(rectangleField) && <label>Length: </label>}
        {(rectangleField) && <input type="number" placeholder=" Input length here" value={length} onChange={(e) => setLength(e.target.value)}/>}
        {(rectangleField) && <label>Width: </label>}
        {(rectangleField) && <input type="text" placeholder=" Input width here" value={width} onChange={(e) => setWidth(e.target.value)}/>}
        {triangleField && <label> Base: </label>}
        {triangleField && <input type="text" placeholder=" Input base here" value={base} onChange={(e) => setBase(e.target.value)}/>}
        {triangleField && <label> Height: </label>}
        {triangleField && <input type="text" placeholder=" Input height here" value={height} onChange={(e) => setHeight(e.target.value)}/>}
        <input type="submit" value="Calculate"/><br/>
      </form>
      <Result result={answer}/>
    </>
      
  )
};

export default InputField;
