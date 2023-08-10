import React, { memo } from "react";
import { useCount } from "./Contexts";
import { CountContext } from "./Contexts";

class Counter extends React.PureComponent {
  render() {
    console.log("Counter Rendering");
    return (
      <div>
        <Count />
        <CountContext.Consumer>
          {({ dec, inc, incIfOdd, incDelay }) => (
            <>
              <ButtonRow
                button1Name="-"
                button2Name="+"
                button1Handler={dec}
                button2Handler={inc}
              />
              <ButtonRow
                button1Name="+ (if odd)"
                button2Name="+ (delay 1s)"
                button1Handler={incIfOdd}
                button2Handler={() => incDelay(1)}
              />
            </>
          )}
        </CountContext.Consumer>
        <AutoIncButton />
      </div>
    );
  }
}

class Count extends React.PureComponent {
  render() {
    console.log("Count Rendering");
    return (
      <CountContext.Consumer>
        {({ count }) => <h1>{count}</h1>}
      </CountContext.Consumer>
    );
  }
}

class ButtonRow extends React.PureComponent {
  render() {
    console.log("ButtonRow Rendering");
    const {
      button1Name,
      button2Name,
      button1Handler,
      button2Handler
    } = this.props;
    return (
      <div>
        <button onClick={button1Handler}>{button1Name}</button>
        <button onClick={button2Handler}>{button2Name}</button>
      </div>
    );
  }
}

class AutoIncButton extends React.PureComponent {
  render() {
    console.log("AutoIncButton Rendering");
    return (
      <CountContext.Consumer>
        {({ timerButtonVal, toggleAutoInc }) => (
          <button onClick={toggleAutoInc}>{timerButtonVal}</button>
        )}
      </CountContext.Consumer>
    );
  }
}

export default Counter;
