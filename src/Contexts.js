import { useState, createContext, useContext, memo } from "react";

const ContentContainerContext = createContext();
const CountContext = createContext();
const TdListContext = createContext();

const useContentContainer = () => useContext(ContentContainerContext);
const useCount = () => useContext(CountContext);
const useTdList = () => useContext(TdListContext);

function ContentContainerProvider({ children }) {
  const [isCounterVisible, setIsCounterVisible] = useState(true);
  const [isTdListVisible, setIsTdListVisible] = useState(true);
  const toggleIsCounterVisible = () =>
    setIsCounterVisible((visible) => !visible);
  const toggleIsTdListVisible = () => setIsTdListVisible((visible) => !visible);
  console.log("ContentContainerProvider Rendering");
  return (
    <ContentContainerContext.Provider
      value={{
        isCounterVisible: isCounterVisible,
        isTdListVisible: isTdListVisible,
        toggleIsCounterVisible: toggleIsCounterVisible,
        toggleIsTdListVisible: toggleIsTdListVisible
      }}
    >
      {children}
    </ContentContainerContext.Provider>
  );
}

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  const [timerButtonVal, setTimerButtonVal] = useState("Start");
  const [intervalId, setIntervalId] = useState(null);
  const dec = () => setCount((count) => count - 1);
  const inc = () => setCount((count) => count + 1);
  const incIfOdd = () => count % 2 && inc();
  const incDelay = (delay) => setTimeout(inc, delay * 1000);
  const toggleAutoInc = () => {
    if (timerButtonVal === "Start") {
      setTimerButtonVal("Stop");
      setIntervalId(setInterval(inc, 1000));
    } else {
      setTimerButtonVal("Start");
      clearInterval(intervalId);
    }
  };
  console.log("CountProvider Rendering");
  return (
    <CountContext.Provider
      value={{
        count: count,
        dec: dec,
        inc: inc,
        incIfOdd: incIfOdd,
        incDelay: incDelay,
        timerButtonVal: timerButtonVal,
        toggleAutoInc: toggleAutoInc
      }}
    >
      {children}
    </CountContext.Provider>
  );
}

function TdListProvider({ children }) {
  const [inputVal, setInputVal] = useState("");
  const [itemList, setItemList] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const handleOnChangeInputVal = (e) => setInputVal(e.target.value);
  const add = () => {
    setItemList((itemList) => [...itemList, inputVal]);
    setInputVal("");
  };
  const delAt = (removedIdx) =>
    setItemList((itemList) => itemList.filter((val, i) => i !== removedIdx));
  const handleOnChangeSortBy = (e) => {
    const sortBy = e.target.value;
    setSortBy(sortBy);
    if (sortBy) {
      setItemList((prevItemList) => {
        const itemList = [...prevItemList];
        itemList.sort();
        if (sortBy === "Z-A") {
          itemList.reverse();
        }
        return itemList;
      });
    }
  };
  console.log("TdListProvider Rendering");
  return (
    <TdListContext.Provider
      value={{
        inputVal: inputVal,
        itemList: itemList,
        sortBy: sortBy,
        add: add,
        delAt: delAt,
        handleOnChangeInputVal: handleOnChangeInputVal,
        handleOnChangeSortBy: handleOnChangeSortBy
      }}
    >
      {children}
    </TdListContext.Provider>
  );
}

export { ContentContainerContext, CountContext, TdListContext };
export { CountProvider, useCount };
export { TdListProvider, useTdList };
export { ContentContainerProvider, useContentContainer };
