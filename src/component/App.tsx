import React, { Component } from 'react';

export default class App extends Component {
  public name: string = 'React with TS';
  public age: number = 2;
  public render() {
    return (
      <div>
        <h1>
          Hey {this.name}, you are {this.age} years old
        </h1>
      </div>
    );
  }
}
