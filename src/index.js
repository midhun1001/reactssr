import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


if(process.env.NODE_ENV == 'development' && module.hot) {
    module.hot.accept('./components/App/App', () => {
        const NewApp = require('./components/App/App').default;
        ReactDOM.render(<NewApp />, document.getElementById('root'));
    });
}
