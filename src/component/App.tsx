import React, { Component } from "react";

export default class App extends Component {

  public name: string = "awesome";
  private age: number = 2;
  public render() {
    return (
      <div>
        <h1>Hi App {this.name}, you are {this.age} years old</h1>
      </div>
    );
  }
}