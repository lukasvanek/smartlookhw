/** @jsx jsx */
import { jsx } from 'theme-ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './pages/Post';
import Posts from './pages/Posts';
import User from './pages/User';

function App() {
  return (
    <div sx={{ variant: 'styles' }}>
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
    </div>
  );
}

export default App;
