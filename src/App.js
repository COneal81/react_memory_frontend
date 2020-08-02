import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import Logout from './components/Logout.js'
import MemoriesContainer from './containers/MemoriesContainer'


import './App.css';

class App extends React.Component{
  
  render () {
    return (
      
      <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Reactivate Memories</h1>
        < Login />
        < Signup />
        < Logout />
        < MemoriesContainer />
        <h2> 
          {/* Current Page is{' '}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch> */}
        </h2>
        <h2>
          Navigate to{' '}
          <ButtonToolbar className="custom-btn-toolbar">
            {/* <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/about">
              <Button>About</Button>
            </LinkContainer>
            <LinkContainer to="/users">
              <Button>Users</Button>
            </LinkContainer> */}
          </ButtonToolbar>
        </h2>
      </Jumbotron>
    </Container>
      
    );

  }
  
}

export default App;
