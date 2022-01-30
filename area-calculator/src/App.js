import { useState } from 'react'
import Header from './components/Header';
import Button from './components/Button';
import InputField from './components/InputField';

function App() {

  //SWITCHES FOR BUTTONS
  const [isCircle, setIsCircle] = useState(true);
  const [isSquare, setIsSquare] = useState(true);
  const [isRectangle, setIsRectangle] = useState(true);
  const [isTriangle, setIsTriangle] = useState(true);
  const [isGoBack, setIsGoBack] = useState(false);
  const [isInputField, setIsInputField] = useState(false)

  const goBack = () => {
    setIsInputField(false)
    setIsCircle(true)
    setIsSquare(true)
    setIsTriangle(true)
    setIsRectangle(true)
    setIsGoBack(false)
  }

  const showShape = () => {
    setIsInputField(true)
    setIsCircle(false)
    setIsSquare(false)
    setIsTriangle(false)
    setIsRectangle(false)
    setIsGoBack(true)
  }
  
  const showCircle = () => {
    showShape();
    setIsCircle(true)
  }
  const showSquare = () => {
    showShape();
    setIsSquare(true)
  }
  const showRectangle = () => {
    showShape();
    setIsRectangle(true)
  }
  const showTriangle = () => {
    showShape();
    setIsTriangle(true)
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
        {isInputField && <InputField circleField={isCircle} squareField={isSquare} rectangleField={isRectangle} triangleField={isTriangle}/>}
      </div>
    </div>
  );
}


export default App;
