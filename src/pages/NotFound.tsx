/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main sx={{ variant: 'styles.container', pt: 100, textAlign: 'center' }}>
      <h1>Page not found :(</h1>
      <Link to="/">
        <Button>Go back home</Button>
      </Link>
    </main>
  );
};

export default NotFound;
