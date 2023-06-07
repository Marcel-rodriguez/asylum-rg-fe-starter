import { useAuth0 } from '@auth0/auth0-react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../components/pages/Auth0/login';
import Header from '../components/Layout/Header';

describe('Sign In Test', () => {
  test('Should display sign in page', () => {
    const { getByText } = render(
      <Router>
        <Login />
      </Router>
    );
    const h2 = getByText(/Please sign in to view Grant Rates!/i);
    expect(h2.textContent).toBe('Please sign in to view Grant Rates!');
  });
  test('should display sign in button', () => {
    const { getByText } = render(
      <Router>
        <Login />
      </Router>
    );
    const button = getByText(/sign in!/i);
    expect(button.textContent).toBe('Sign In!');
  });
});
