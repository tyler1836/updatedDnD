import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react'

//middleware to retrieve jwt set in local storage
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const httpLink = createHttpLink({
  uri: '/graphql'
})
const client = new ApolloClient({
  //concat with request link to graphql
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

import Header from './classes/Header'
import Home from './classes/Home'
import NotFound from './classes/NotFound'
import Arcanist from './classes/Arcanist'
import Pugilist from './classes/Pugilist'
import Sorcerer from './classes/Thief';
import Signup from './classes/Signup';
import Profile from './classes/Profile';
import CreateCharacter from './classes/CreateCharacter';
/* 
updates:
  need database
  need queries from database
  themes based on class state
*/
function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/login" element={<Signup />} />
            <Route exact path='/profile' element={<Profile />}/>
            <Route exact path='/create' element={<CreateCharacter />}/>

            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App