import { use } from 'react';

import { ThemeContext } from './Context.js'

export function UseExample({children}) {

  const theme = use(ThemeContext)
    // const v = '' + theme_use
  // function ClickHandler() {
  //   alert("Context value: " + theme);
  // }

  return (
    <div> 
      {theme}
    </div>
  )
}