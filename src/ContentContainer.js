import "./styles.css";
import React, { memo } from "react";
import Counter from "./Counter";
import TdList from "./TdList";
import { useContentContainer } from "./Contexts";
import { CountProvider, TdListProvider } from "./Contexts";

const HOC = (Component) =>
  class extends React.PureComponent {
    render() {
      console.log(Component, "HOC Rendering");
      const { visible, visibleHandler, ...rest } = this.props;
      return (
        <div className="HOC">
          <input type="checkbox" checked={visible} onChange={visibleHandler} />
          <label>visible</label>
          {visible && <Component {...rest} />}
        </div>
      );
    }
  };

const HOCCounter = HOC(Counter);
const HOCTdList = HOC(TdList);

const ContentContainer = memo((props) => {
  const {
    isCounterVisible,
    isTdListVisible,
    toggleIsCounterVisible,
    toggleIsTdListVisible
  } = useContentContainer();
  console.log("ContentContainer Rendering");
  return (
    <div className="ContentContainer">
      <CountProvider>
        <HOCCounter
          visible={isCounterVisible}
          visibleHandler={toggleIsCounterVisible}
        />
      </CountProvider>
      <TdListProvider>
        <HOCTdList
          visible={isTdListVisible}
          visibleHandler={toggleIsTdListVisible}
        />
      </TdListProvider>
    </div>
  );
});

export default ContentContainer;
