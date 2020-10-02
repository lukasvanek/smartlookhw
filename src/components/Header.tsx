/** @jsx jsx */
import { jsx, Button, useColorMode } from 'theme-ui';
import { CgDarkMode } from 'react-icons/cg';
import { Link, useLocation } from 'react-router-dom';
// @ts-ignore
import { alpha } from '@theme-ui/color';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { useState } from 'react';

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();
  const [alphaVal, setAlphaVal] = useState(0);
  const { pathname } = useLocation();

  useScrollPosition(({ currPos }) => {
    const y = Math.abs(currPos.y);
    if (y > 200) {
      setAlphaVal(1);
    } else {
      setAlphaVal(Math.abs(currPos.y) / 200);
    }
  });

  const rgbBg = colorMode === 'default' ? '255,255,255' : '0,0,0';

  let suffix = '';
  if (pathname.includes('user')) {
    suffix = '/ user';
  }
  if (pathname.includes('post')) {
    suffix = '/ post';
  }

  return (
    <header
      sx={{
        variant: 'styles.container',
        display: 'flex',
        position: 'fixed',
        width: '100%',
        height: 70,
        zIndex: 9999999,
      }}
      style={{
        backgroundColor: `rgba(${rgbBg},${alphaVal})`,
        boxShadow: `0 0 8px rgba(0, 0, 0, ${alphaVal / 8})`,
      }}
    >
      <h1
        sx={{
          a: {
            letterSpacing: '0.2em',
            fontSize: 3,
            verticalAlign: 'text-top',
          },
        }}
      >
        <Link to="/">
          HOME <span sx={{ color: alpha('text', 0.4) }}>{suffix}</span>
        </Link>
      </h1>

      <div sx={{ mx: 'auto' }} />

      <Button
        sx={{
          backgroundColor: 'transparent',
          color: colorMode === 'default' ? 'black' : 'white',
          fontSize: '32px',
          p: 1,
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
