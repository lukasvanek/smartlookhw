import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './pages/Post';
import Posts from './pages/Posts';
import User from './pages/User';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:id">
          <User />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="/">
          <Posts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
