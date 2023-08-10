import React, { memo } from "react";
import { useTdList } from "./Contexts";

const ItemList = memo((props) => {
  const { itemList } = useTdList();
  console.log("ItemList Rendering");
  return (
    <div>
      <SortBy />
      {itemList.map((val, i) => (
        <Item key={i} val={val} i={i} />
      ))}
    </div>
  );
});

const SortBy = memo((props) => {
  const { sortBy, handleOnChangeSortBy } = useTdList();
  console.log("SortBy Rendering");
  return (
    <div>
      <label>Sort By </label>
      <select value={sortBy} onChange={handleOnChangeSortBy}>
        <option value=""></option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
    </div>
  );
});

const Item = memo((props) => {
  const { delAt } = useTdList();
  const { val, i } = props;
  console.log("Item Rendering");
  return (
    <div>
      {val}
      <button onClick={() => delAt(i)}>Delete</button>
    </div>
  );
});

export default ItemList;
