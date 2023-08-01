import { MdNightsStay, MdWbSunny } from 'react-icons/md'
import PropTypes from 'prop-types';

export const Header = ({ darkMode, setDarkMode }) => {
    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <header className='bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
            <nav className='flex justify-between items-center p-5'>
                <h1 className='text-lg'>CRIS</h1>
                <button 
                    onClick={handleDarkModeToggle} 
                    aria-label="Toggle dark mode" 
                    className='focus:outline-none'
                >
                    {
                        darkMode ? (
                            <MdWbSunny className='text-2xl cursor-pointer' />
                        ) : (
                            <MdNightsStay className='text-2xl cursor-pointer' />
                        )
                    }
                </button>
            </nav>
        </header>
    )
}

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    setDarkMode: PropTypes.func.isRequired
}
