import React from 'react';

import './Toggle.scss';

const Toggle = ({mobile, darkMode, handleModeChange}) => {
    
  return (
    <div className={ mobile ? "app__navbar-mode-mobile" : "app__navbar-mode" }>
        <label className='switch'>
            <input type="checkbox" checked={darkMode} value={darkMode} onChange={handleModeChange}/>
            <span className='slider' ></span>
        </label>
    </div>
  )
}

export default Toggle;