import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const ProfileHeader = () => {
  const { name } = useContext(UserContext);

  return <h1>Welcome, {name}!</h1>;
};

export default ProfileHeader;
