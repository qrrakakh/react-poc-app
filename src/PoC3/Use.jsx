import { use } from 'react';

import { ThemeContext } from './Context.jsx'

export function UseExample({children}) {

  const theme = use(ThemeContext)

  return (
    <div> 
      {theme}
    </div>
  )
}