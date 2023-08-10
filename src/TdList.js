import React, { memo } from "react";
import ItemList from "./ItemList";
import { useTdList } from "./Contexts";

const TdList = memo((props) => {
  console.log("TdList Rendering");
  return (
    <div>
      <ItemList />
      <InputField />
    </div>
  );
});

const InputField = memo((props) => {
  const { inputVal, handleOnChangeInputVal, add } = useTdList();
  console.log("InputField Rendering");
  return (
    <div>
      <input value={inputVal} onChange={handleOnChangeInputVal} />
      <button onClick={add}>Add</button>
    </div>
  );
});

export default TdList;
