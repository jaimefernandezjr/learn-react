import { useState } from 'react'
import Result from './components/Result';
import Header from './components/Header';
import Button from './components/Button';
import InputField from './components/InputField';

function App() {

  //SWITCHES FOR BUTTONS
  const [isCircle, setIsCircle] = useState(true);
  const [isSquare, setIsSquare] = useState(true);
  const [isRectangle, setIsRectangle] = useState(true);
  const [isTriangle, setIsTriangle] = useState(true);
  const [isResult, setIsResult] = useState(false);
  const [isGoBack, setIsGoBack] = useState(false);
  const [isInputField, setIsInputField] = useState(false)
  const [result, setResult] = useState(0)

  //SWITCHES FOR FIELDS
  const [circleField, setCircleField] = useState(false)
  const [squareField, setSquareField] = useState(false)
  const [rectangleField, setRectangleField] = useState(false)
  const [triangleField, setTriangleField] = useState(false)
  

  const goBack = () => {
    setIsCircle(true)
    setIsSquare(true)
    setIsTriangle(true)
    setIsRectangle(true)
    setIsGoBack(false)
    setIsResult(false)
  }

  const showShape = () => {
    setIsInputField(true)
    setIsCircle(false)
    setIsSquare(false)
    setIsTriangle(false)
    setIsRectangle(false)
    setIsGoBack(true)
    setIsResult(true)
  }
  
  const showCircle = () => {
    showShape();
    setCircleField(true)
  }
  const showSquare = () => {
    showShape();
    setSquareField(true)
  }
  const showRectangle = () => {
    showShape();
    setRectangleField(true)
  }
  const showTriangle = () => {
    showShape();
    setTriangleField(true)
  }
  const showResult = () => {
    
  }

  return (
    <div className="App">
      <Header />
      <div className='btn-grp'>
        {isCircle && <Button className='circle-btn btn' text='Area of Circle' color='lightgreen' onClick={showCircle}/>}
        {isSquare && <Button className='square-btn btn' text='Area of Square' color='lightblue' onClick={showSquare}/>}
        {isRectangle && <Button className='rectangle-btn btn' text='Area of Rectangle' color='violet' onClick={showRectangle}/>}
        {isTriangle && <Button className='triangle-btn btn' text='Area of Triangle' color='pink' onClick={showTriangle}/>}
        {isGoBack && <Button className='back-btn btn' text='< Go Back' color='maroon' onClick={goBack}/>}
        {isInputField && <InputField circleField={circleField} squareField={squareField} rectangleField={rectangleField} triangleField={triangleField} onResult={setResult}/>}
      </div>
    </div>
  );
}


export default App;
