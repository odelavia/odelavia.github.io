import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './root';
import { AppContainer } from 'react-hot-loader';
// import App from './components/App';
import AppRoutes from './routing/AppRoutes';
import store from './store/store'
import './styles/main.scss';

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
);

// Webpack Hot Module Replacement
if (module.hot) {
  module.hot.accept('./routing/AppRoutes', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
