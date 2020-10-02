/** @jsx jsx */
import { jsx, Divider } from 'theme-ui';
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
import Fade from 'react-reveal/Fade';

import {
  MdPhone,
  MdEmail,
  MdWeb,
  MdLocationCity,
  MdBusiness,
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
  }, []);

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
        <div>
          <div>
            <MdPhone />
            {user.phone}
          </div>
          <div>
            <MdEmail />
            {user.email}
          </div>
          <div>
            <MdWeb />
            {user.website}
          </div>
        </div>
        {user.company && (
          <div>
            <MdBusiness />
            {user.company.name}
            {user.company.catchPhrase}
            {user.company.bs}
          </div>
        )}
        {user.address && (
          <div>
            <MdLocationCity />
            {user.address.city}
            {user.address.street}
            {user.address.suite}
            {user.address.zipcode}
            <Map style={{ height: 300 }} center={position} zoom={1}>
              <TileLayer
                attribution='&amp;copy <a style="color: black" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}></Marker>
            </Map>
          </div>
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
