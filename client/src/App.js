import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'
import Arcanist from './classes/Arcanist'
import Pugilist from './classes/Pugilist'
/* 
updates:
  need database
  need queries from database
  themes based on class state
*/
function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
      
        {/* <Pugilist /> */}
        <Arcanist />
    </div>
    </ThemeProvider>
  )
}

export default App