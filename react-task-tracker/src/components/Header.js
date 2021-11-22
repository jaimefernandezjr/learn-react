import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1> { title } </h1>
            <Button color='green' text='Add'/>
        </header>
    )
}

//default
Header.defaultProps = {
    title: 'Task Tracker',
}

//specifies the type of element
Header.propType = {
    title: PropTypes.string.isRequired,
}

// //variable for styling
// const headingStyle = {
//     color: 'blue', 
//     backgroundColor:'black',
// }

export default Header
