import PropTypes from 'prop-types';

const Button = ( {color, text }) => {
    const onClick = () => {
        console.log('Clicked')

    }
    return <button onClick={ onClick } style={{backgroundColor:color}} 
    className='btn'>
        { text }
    </button>
}

Button.defaultProps = {
    color: 'steelblue'
}
Button.propType = {
    color: PropTypes.string,
    text: PropTypes.string
}
export default Button
