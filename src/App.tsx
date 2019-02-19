import React from 'react';
import Calendar from './Calendar';

type AppProps = {};

type AppState = {};

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="App">
        <Calendar />
      </div>
    );
  }
}
