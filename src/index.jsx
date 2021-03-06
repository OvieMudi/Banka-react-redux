/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <BrowserRouter>
      <AppContainer>
        <Component />
      </AppContainer>
    </BrowserRouter>,
    document.getElementById('root'),
  );
};

render(App);

if (module.hot) module.hot.accept(App, () => render(App));
