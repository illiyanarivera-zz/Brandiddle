import React from 'react';

// configure amplify
import Amplify from '@aws-amplify/core';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';

import { Helmet } from 'react-helmet';
import awsconfig from '../aws-exports';
import App from '../components/App.jsx';
import { headData } from '../mock/data.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

Amplify.configure(awsconfig);

export default () => {
  const { title, lang, description } = headData;

  return (
    <AmplifyAuthenticator>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <App />
    </AmplifyAuthenticator>
  );
};
