/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const height = 300;
const defaultTop = 20;

const Cover = () => {
  const [top, setTop] = useState(defaultTop);

  useScrollPosition(({ currPos }) => {
    const y = Math.abs(currPos.y);
    if (y < height) {
      setTop((currPos.y / height) * 20 + defaultTop);
    }
  });

  return (
    <div
      sx={{
        backgroundImage: 'url(/cover.jpg)',
        backgroundSize: 'cover',
        width: '100%',
        height,
      }}
      style={{
        backgroundPosition: `0% ${top}%`,
      }}
    />
  );
};

export default Cover;
