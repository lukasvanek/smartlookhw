/** @jsx jsx */
import { jsx } from 'theme-ui';

type AvatarProps = {
  src: string;
  size?: number;
  styles?: object;
};

const Avatar = ({ src, size = 48, styles }: AvatarProps) => {
  return (
    <div
      sx={{
        display: 'inline-block',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '50%',
        width: size,
        height: size,
        ...styles,
      }}
    />
  );
};

export default Avatar;
