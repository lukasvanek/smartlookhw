/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Post from './pages/Post';
import Posts from './pages/Posts';
import User from './pages/User';
import Header from './components/Header';
import ScrollIntoView from './components/ScrollIntoView';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div sx={{ variant: 'styles' }}>
      <Router>
        <Header />
        <ScrollIntoView>
          <Switch>
            <Route exact path="/user/:id">
              <User />
            </Route>
            <Route exact path="/post/:id">
              <Post />
            </Route>
            <Route exact path="/">
              <Posts />
            </Route>
            <Route path="/404" component={NotFound} />
            <Redirect to="/404" />
          </Switch>
        </ScrollIntoView>
      </Router>
    </div>
  );
}

export default App;
