/** @jsx jsx */
import { jsx, Button, useColorMode } from 'theme-ui';
import { CgDarkMode } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <header
      sx={{
        variant: 'styles.container',
        display: 'flex',
      }}
    >
      <div>
        {' '}
        <h1>
          <Link to="/">Home</Link>
        </h1>
      </div>

      <div sx={{ mx: 'auto' }} />
      <Button
        sx={{
          alignSelf: 'end',
          backgroundColor: 'transparent',
          color: colorMode === 'default' ? 'black' : 'white',
          fontSize: '32px',
          p: 0,
          m: 2,
          ':hover': {
            backgroundColor: 'transparent',
          },
        }}
        onClick={() =>
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }
      >
        <CgDarkMode />
      </Button>
    </header>
  );
};

export default Header;
