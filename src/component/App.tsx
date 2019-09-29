import React, { Component } from "react";

export default class App extends Component {
  name: string = "React with TS";
  age: number = 2;
  public render() {
    return (
      <div>
        <h1>Hey {this.name}, you are {this.age} years old</h1>
      </div>
    );
  }
}