import React, { use } from 'react';

import { ThemeContext } from './Context.tsx'

export function UseExample() {

  const theme = use(ThemeContext)

  return (
    <div> 
      Current theme: {theme}
    </div>
  )
}