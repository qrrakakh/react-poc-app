import { use } from 'react';

import { ThemeContext } from './Context.js'

export function UseExample({children}) {

  const theme = use(ThemeContext)

  return (
    <div> 
      {theme}
    </div>
  )
}