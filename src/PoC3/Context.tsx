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
        <p>React version is {React.version} <br />use API is available in stable channel in React 19. See <a href="https://react.dev/reference/react/use">the document</a>.</p>
        {
          <UseExample />
        }
      </div>
      </ThemeContext.Provider>
  )
}

export default ContextExample