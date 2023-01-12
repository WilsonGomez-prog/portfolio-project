import React, {useState, useEffect} from 'react';
import { HiX } from 'react-icons/hi';
import { GiHamburgerMenu } from 'react-icons/gi'
import {AnimatePresence, motion} from 'framer-motion'
import './Navbar.scss';
import Toggle from '../Toggle/Toggle';
import Logo from '../Logo/Logo';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () =>{
        setToggle(prev => !prev);
    }

    const handleModeChange = () => {
        setDarkMode(prev => !prev)
    }

    const setCssProperty = (doc, prop, value) => {
        doc.style.setProperty(prop, value);
    }

    const getCssProperty = (doc, prop) => {
        return getComputedStyle(doc).getPropertyValue(prop);
    }

    useEffect(() => {
        let mode = darkMode ? 'dark' : 'light';
        let rootDocument = document.getElementById("root");

        setCssProperty(rootDocument, '--primary-color', getCssProperty(rootDocument, `--${mode}-primary-color`));
        setCssProperty(rootDocument, '--secondary-color', getCssProperty(rootDocument, `--${mode}-secondary-color`));
        setCssProperty(rootDocument, '--lightGray-color', getCssProperty(rootDocument, `--${mode}-lightGray-color`));
        setCssProperty(rootDocument, '--gray-color', getCssProperty(rootDocument, `--${mode}-gray-color`));
        setCssProperty(rootDocument, '--brown-color', getCssProperty(rootDocument, `--${mode}-brown-color`));
        setCssProperty(rootDocument, '--bgIMG', getCssProperty(rootDocument, `--${mode}-bgIMG`));
        setCssProperty(rootDocument, '--badgebg-color', getCssProperty(rootDocument, `--${mode}-badgebg-color`));
        setCssProperty(rootDocument, '--iconbg-color', getCssProperty(rootDocument, `--${mode}-iconbg-color`));
        setCssProperty(rootDocument, '--text-color', getCssProperty(rootDocument, `--${mode}-text-color`));
        setCssProperty(rootDocument, '--head-text-color', getCssProperty(rootDocument, `--${mode}-head-text-color`));
        setCssProperty(rootDocument, '--hoverbg-color', getCssProperty(rootDocument, `--${mode}-hoverbg-color`));
        setCssProperty(rootDocument, '--cardbg-color', getCssProperty(rootDocument, `--${mode}-cardbg-color`));
        setCssProperty(rootDocument, '--shadow-color', getCssProperty(rootDocument, `--${mode}-shadow-color`));
        
    }, [darkMode])

  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <Logo />
        </div>
        <ul className="app__navbar-links">
            {['home','about','work','skills','contact'].map((item) =>(
                <li className='app__flex p-text' key={`link-${item}`}>
                    <div/> 
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>
        <Toggle mobile={false} darkMode={darkMode} handleModeChange={handleModeChange} />
        <div className="app__navbar-menu">
            <GiHamburgerMenu onClick={handleToggle} />
            <AnimatePresence>
                {
                    toggle && (
                        <motion.div
                            key="menu"
                            className="menu-options"
                            initial={{ x: 0 }}
                            animate={{ x: [1000, 0] }}
                            transition={{ duration: 1, ease:'easeOut' }}
                            exit={{ 
                                x: 1000, 
                                transition: {duration: 0.85, ease:'easeIn'}
                            }}
                            >
                                <HiX  onClick={handleToggle}  />
                                <Toggle mobile={true} darkMode={darkMode} handleModeChange={handleModeChange} />
                                <ul>
                                    {['home','about','work','skills','contact'].map((item) =>(
                                        <li key={item}>
                                            <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                                        </li>
                                    ))}
                                </ul>
                                
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    </nav>
  )
}

export default Navbar;