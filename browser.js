import React from 'react';
import { render } from 'react-dom';
// import ContactsApp from './app/components/ContactsApp';
import { Router } from 'react-router';
import { createHistory } from 'history';
import routes from './app/routes';

let handleChangeElement = (Component, props) => {
  if (Component.hasOwnProperty('requestInitialData')) {
    let initialData = document.getElementById('initial-data').textContent;

    if (initialData.length > 0) {
      initialData = JSON.stringify(initialData);
    }

    return <Component initialData={initialData} {...props} />;
  } else {
    return <Component {...props} />;
  }
}

render((
  <Router history={createHistory()} createElement={handleChangeElement}>{routes}</Router>
), document.getElementById('root'));
