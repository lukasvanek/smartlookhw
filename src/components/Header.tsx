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
        position: 'fixed',
        width: '100%',
      }}
    >
      <div>
        <h1
          sx={{
            a: {
              letterSpacing: '0.2em',
              fontSize: 3,
            },
          }}
        >
          <Link to="/">HOME</Link>
        </h1>
      </div>

      <div sx={{ mx: 'auto' }} />
      <Button
        sx={{
          alignSelf: 'center',
          backgroundColor: 'transparent',
          color: colorMode === 'default' ? 'black' : 'white',
          fontSize: '32px',
          p: 0,
          my: 2,
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
