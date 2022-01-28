import PropTypes from 'prop-types';
const Button = ({ className, text, color, onClick }) => {
    return <button className={className} style={{ backgroundColor: color }} onClick={onClick}>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue' 
}

Button.propTypes = {
    name: PropTypes.string,
    shape: PropTypes.string
}

export default Button;