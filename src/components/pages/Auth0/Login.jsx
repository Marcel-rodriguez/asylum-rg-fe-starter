import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../../../styles/loginCard.css';

function Login() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  return (
    !isAuthenticated && (
      <div className="loginCard">
        <h2>Please sign in to view Grant Rates!</h2>
        <button onClick={() => loginWithRedirect()}>Sign In!</button>
      </div>
    )
  );
}

export default Login;
