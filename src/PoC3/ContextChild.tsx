import React, { useContext } from 'react';

import { ThemeContext } from './Context.js';


import * as styles from './styles/button.module.css'

const ContextChildButton = ({children}) =>  {
  const theme_on_child = useContext(ThemeContext)
  const className = 'button_' + theme_on_child

  return (
    <button className={`${styles.button} ${styles[className]}`}>
    {children}
    </button>
  )
}

export default ContextChildButton