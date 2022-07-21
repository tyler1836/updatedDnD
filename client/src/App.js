import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
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

  return (
    <div>
      <div className='home'>
      <img src="https://images.pexels.com/photos/970517/pexels-photo-970517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcset="" />
      </div>
    </div>
  )
}

export default App