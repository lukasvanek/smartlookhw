/** @jsx jsx */
import { jsx, Divider, Flex, Box } from 'theme-ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, Dispatch } from '../features/store';
import { pics } from '../utils';
import Avatar from '../components/Avatar';
import Cover from '../components/Cover';
import { Post } from '../features/posts/posts.model';
import PostPreview from '../components/PostPreview';
import { postsOfUserSelector } from '../features/posts/posts.selector';
import { Map, TileLayer, Marker } from 'react-leaflet';
// @ts-ignore
import { alpha } from '@theme-ui/color';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import {
  MdPhone,
  MdEmail,
  MdWeb,
  MdLocationCity,
  MdBusiness,
  MdMap,
  MdApps,
  MdModeEdit,
} from 'react-icons/md';

interface ParamTypes {
  id: string;
}

const User = () => {
  const { id } = useParams<ParamTypes>();
  const dispatch = useDispatch<Dispatch>();
  const user = useSelector((state: RootState) => state.users[id]) || {};
  const posts: Post[] = useSelector(postsOfUserSelector(id));

  useEffect(() => {
    dispatch.users.fetchById(id);
    // I would use endpoint for fetching posts of user only instead
    dispatch.posts.load();
  }, [dispatch.users, dispatch.posts, id]);

  let position = [49.209916, 16.592605] as any;
  if (user.address && user.address.geo) {
    position = [Number(user.address.geo.lat), Number(user.address.geo.lng)];
  }

  return (
    <div>
      <Fade>
        <Cover />
      </Fade>

      <main
        sx={{
          variant: 'styles.container',
          mt: -50,
          position: 'relative',
          zIndex: 999,
        }}
      >
        <Avatar
          size={100}
          styles={{}}
          src={`https://tinyfac.es/data/avatars/${pics[Number(id)]}-200w.jpeg`}
        />

        <h1>{user.name}</h1>

        <Fade>
          <Flex
            sx={{
              flexWrap: 'wrap',
              ul: {
                listStyle: 'none',
                paddingInlineStart: 0,
                m: 0,
              },
              li: {
                mb: 3,
              },
              svg: {
                verticalAlign: 'middle',
                width: '1.5em',
                height: '1.5em',
                fill: alpha('text', 0.8),
                mr: 2,
              },
              span: {
                verticalAlign: 'middle',
              },
            }}
          >
            {user.company && (
              <Box sx={{ minWidth: 220 }}>
                <ul>
                  <li>
                    <MdBusiness />
                    <span>{user.company.name}</span>
                  </li>
                  <li>
                    <MdApps />
                    <span>{user.company.catchPhrase}</span>
                  </li>
                  <li>
                    <MdModeEdit />
                    <span>{user.company.bs}</span>
                  </li>
                  <li>
                    <MdLocationCity />
                    <span>
                      {user.address.street}, {user.address.city},{' '}
                      {user.address.suite}
                    </span>
                  </li>
                  <li>
                    <MdMap />
                    <span>{user.address.zipcode}</span>
                  </li>
                </ul>
              </Box>
            )}
            <Box sx={{ mx: 'auto' }} />
            <Box sx={{ minWidth: 220 }}>
              <ul>
                <li>
                  <MdPhone />
                  <span>{user.phone}</span>
                </li>
                <li>
                  <MdEmail />
                  <span>{user.email}</span>
                </li>
                <li>
                  <MdWeb />
                  <span>{user.website}</span>
                </li>
              </ul>
            </Box>
          </Flex>
        </Fade>

        {user.address && (
          <Fade>
            <Map style={{ height: 300 }} center={position} zoom={2}>
              <TileLayer
                attribution='&amp;copy <a style="color: black" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}></Marker>
            </Map>
          </Fade>
        )}

        <Divider sx={{ my: 4 }} />

        <h3>Posts ({posts.length})</h3>

        {posts.map((post: Post) => (
          <Fade key={`post-${post.id}`}>
            <PostPreview post={post} />
          </Fade>
        ))}
      </main>
    </div>
  );
};

export default User;
