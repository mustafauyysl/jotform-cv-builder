import React, { Component } from 'react';
import MainNavigator from './navigation/MainNavigator';
import { Provider } from 'react-redux';
import configureStore from './redux/reducers/configureStore';

const store = configureStore();

class App extends Component{

  render(){
    return(
      <Provider store={store}>
          <MainNavigator />
      </Provider>
      
    )
  }
}

export default App;