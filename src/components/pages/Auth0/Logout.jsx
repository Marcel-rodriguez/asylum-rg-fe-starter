import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

function Logout() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <Link
        style={{
          color: '#E2F0F7',
          marginRight: '75px',
          marginLeft: '75px',
          color: '#FA8072',
        }}
        onClick={() => logout()}
      >
        Sign Out
      </Link>
    )
  );
}

export default Logout;
