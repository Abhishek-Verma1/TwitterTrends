import React, { Component } from 'react';
import { AppNavigator } from './src/AppNavigator';
import { Platform } from 'react-native';
import { Provider, connect } from 'react-redux';
import configureStore, { AppReduxifyNavigator } from './src/store';

const store = configureStore();

const mapStateToProps = state => ({
  state: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(AppReduxifyNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}