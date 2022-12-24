import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
        {['home','about','work','skills','contact'].map((item, index) => ( 
           <a 
            href={`#${item}`} 
            style={ active === item ? {backgroundColor : '#313BAC'} : { } }
            className="app__navigation-dot"
            key={item + index}
           > </a>
        ))}
    </div>
  )
}

export default NavigationDots;