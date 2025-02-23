import React, { useState, createContext } from 'react';

import ContextChildButton from './ContextChild.tsx';

import { UseExample } from './Use.tsx'

export const ThemeContext = createContext<string>("");

const ContextExample = (props) => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={theme}>
      <div>
      <label>
          <input 
            type = "checkbox"
            checked={theme === 'dark'}
            onChange={(event) => {
              setTheme(event.target.checked ? 'dark' : 'light')
            }}
          / >
            Use dark mode
        </label>
        <div>
          <ContextChildButton>Click</ContextChildButton>
        </div>
        <h4>use example</h4>
        <p>React version is {React.version}</p>
        {
          React.version.includes('canary') || React.version.includes('experimental')
            ? <UseExample /> :
          "Available only in React Canary/Experimental as of Feb 12 2024."
        }
      </div>
      </ThemeContext.Provider>
  )
}

export default ContextExample