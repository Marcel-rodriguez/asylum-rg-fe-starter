import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../../styles/profileCard.css';
function Profile() {
  const { user } = useAuth0();
  return (
    <div className="profileCard">
      {user?.picture && <img src={user.picture} alt={user.name} />}
      <h2>{user?.name}</h2>
      <ul>
        {Object.keys(user).map((objKey, i) => (
          <li key={i}>
            {' '}
            {objKey}: {user[objKey]}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
