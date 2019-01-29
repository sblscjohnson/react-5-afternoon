import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import router from './router'
import myStore from './store'

class App extends Component {

  render() {
    return(
      <Provider store={myStore}>
          <div>
            <HashRouter>
              {router}
            </HashRouter>
          </div>
      </Provider>
    );
  }
}

export default App;
