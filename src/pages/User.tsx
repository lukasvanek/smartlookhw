/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, Dispatch } from '../features/store';
import { pics } from '../components/Identity';
import Avatar from '../components/Avatar';
import { Post } from '../features/posts/posts.model';
import PostPreview from '../components/PostPreview';
import { postsOfUserSelector } from '../features/posts/posts.selector';
import { Map, TileLayer, Marker, LatLng } from 'react-leaflet';
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
      <div
        sx={{
          backgroundImage: 'url(/cover.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100%',
          height: 200,
        }}
      />
      <main sx={{ variant: 'styles.container', mt: -50 }}>
        <Avatar
          size={100}
          styles={{}}
          src={`https://tinyfac.es/data/avatars/${pics[Number(id)]}-200w.jpeg`}
        />
        <h1>{user.name}</h1>
        <h2>{user.username}</h2>
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
        {user.company && (
          <div>
            <MdBusiness />
            {user.company.name}
            {user.company.catchPhrase}
            {user.company.bs}
          </div>
        )}
        {posts.map((post: Post) => (
          <PostPreview key={`post-${post.id}`} post={post} />
        ))}
      </main>
    </div>
  );
};

export default User;
