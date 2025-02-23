import { useContext } from 'react';

import { ThemeContext } from './Context.jsx';

import styles from './styles/button.module.css'

export function ContextChildButton({children}) {
  const theme_on_child = useContext(ThemeContext)
  const className = 'button-' + theme_on_child

  return (
    <button className={`${styles.button} ${styles[className]}`}>
    {children}
    </button>
  )
}
