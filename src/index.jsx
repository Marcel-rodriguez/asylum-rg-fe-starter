import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  // useHistory,
  Switch,
} from 'react-router-dom';

import 'antd/dist/antd.less';
import { NotFoundPage } from './components/pages/NotFound';
import { LandingPage } from './components/pages/Landing';

import { FooterContent, SubFooter } from './components/Layout/Footer';
import { HeaderContent } from './components/Layout/Header';

// import { TablePage } from './components/pages/Table';

import { Layout } from 'antd';
import GraphsContainer from './components/pages/DataVisualizations/GraphsContainer';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import reducer from './state/reducers';
import { colors } from './styles/data_vis_colors';

//import for redux logger
import logger from 'redux-logger';
import { useAuth0 } from '@auth0/auth0-react';

//Import for Auth0 Feature
import { Auth0Provider } from '@auth0/auth0-react';

//import for auth0 Pages
import Login from './components/pages/Auth0/Login';
import Profile from './components/pages/Auth0/Profile';

const { primary_accent_color } = colors;

const store = configureStore({ reducer: reducer }, applyMiddleware(logger));

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENTID;

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <Auth0Provider
          domain={auth0Domain}
          clientId={auth0ClientId}
          redirectUri={window.location.origin}
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);

export function App() {
  const { Footer, Header } = Layout;
  const { isAuthenticated } = useAuth0();
  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: primary_accent_color,
        }}
      >
        <HeaderContent />
      </Header>

      <Login />

      {isAuthenticated && (
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/graphs" component={GraphsContainer} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFoundPage} />
        </Switch>
      )}

      <Footer
        style={{
          backgroundColor: primary_accent_color,
          color: '#E2F0F7',
        }}
      >
        <FooterContent />
      </Footer>
      <Footer
        style={{
          backgroundColor: primary_accent_color,
          padding: 0,
        }}
      >
        <SubFooter />
      </Footer>
    </Layout>
  );
}
