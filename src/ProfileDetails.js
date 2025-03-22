import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const ProfileDetails = () => {
  const { name, age } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default ProfileDetails;
