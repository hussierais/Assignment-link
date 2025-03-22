import React from 'react';
import { UserProvider } from './UserContext';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';
import PostList from './PostList';

const App = () => {
  return (
    <UserProvider>
      <div style={{ padding: '20px' }}>
        <ProfileHeader />
        <ProfileDetails />
        <hr />
        <PostList />
      </div>
    </UserProvider>
  );
};

export default App;
