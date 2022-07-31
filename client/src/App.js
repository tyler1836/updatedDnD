import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
  uri: 'https://dndserverside.herokuapp.com/graphql'
})
const client = new ApolloClient({
  //concat with request link to graphql
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

import Header from './userPages/Header'
import Home from './userPages/Home'
import NotFound from './userPages/NotFound'
import Signup from './userPages/Signup';
import Profile from './userPages/Profile';
import CreateCharacter from './userPages/CreateCharacter';
import Loading from './userPages/Loading';
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
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path="/login" component={Signup} />
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/create' component={CreateCharacter}/>
            <Route exact path='/loading/:id' component={Loading }/>

            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App