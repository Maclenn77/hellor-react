import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import HelloWorld from './components/HelloWorld';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HelloWorld />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App;
