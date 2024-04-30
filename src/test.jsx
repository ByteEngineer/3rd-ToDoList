import React, { useState, useRef } from "react";

const Test = () => {
  const [list, setList] = useState([]);

  const ref = useRef(null);
  const add = () => {
    setList([...list, ref.current.value]);
    ref.current.value = [];
  };
  const handleDelete = (listItem) => {
    setList(
      list?.filter((e) => {
        return e !== listItem;
      })
    );
  };
  console.log(list);
  return (
    <>
      <div className="bg-blue-400">
        <div className="flex justify-between container mx-auto py-4 px-5 items-center">
          <div className="text-3xl pb-1 font-medium text-white">
            TODO LIST <i class="fa-solid fa-bolt"></i>
          </div>
          <div className="bg-white py-1 pl-1 rounded-full hover:scale-105 duration-700">
            <input type="text" ref={ref} className="px-2 rounded-full focus:outline-blue-700 focus:text-blue-700" />

            <button onClick={add} className="border-none outline-none px-2 mx-2 hover:bg-blue-200 hover:rounded-full text-blue-700">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>

      {list?.map((listItem) => {
        return (
          <>
            <div className="container mx-auto flex justify-center py-10">
              <div className="hover:scale-105 duration-700 box rounded-md bg-white" key={listItem} style={{ width: "220px", height: "200px", border: "2px solid blue" }}>
                <center className="pt-4 text-blue-700">{listItem}</center>
                <div className="pt-30">
                  <button className="h-10 w-full bg-blue-400 px-1 text-white" onClick={() => { handleDelete(listItem) }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Test;
