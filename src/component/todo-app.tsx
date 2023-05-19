import React, { useState } from "react";
import { Header } from "./header";
import { ListSection } from "./list-section";

export const ToDoApp = () => {
  const inputRef= React.useRef<HTMLInputElement>(null);
  const [list, setList] = useState(new Array<string>());
  const [text, setText] = useState("");

  function store(arr:string[]){
    localStorage.setItem('LIST',JSON.stringify(arr));
    setList(arr);
  }
  const addToList = () => {
    if (text.length) {
      store([text,...list.map((e) => e)]);
      inputRef.current?.focus();
      setText("");      
    } else alert("Type something to add in list");
  };

  const removeFromList = (type: "DELETE" | "CLEAR", index?: number) => {
    if (type === "CLEAR" && list.length) {
      var answer = window.confirm("Are you sure, you want to clear?");
      if (answer) store([]);
    } else if (Number(index) >= 0) {
      list.splice(Number(index), 1);
      store([...list.map((e) => e)]);
    }
  };

  React.useEffect(()=>{
    setList(localStorage.getItem("LIST") ? JSON.parse(localStorage.getItem("LIST") as any):[])
  },[])

  return (
    <div className="absolute inset-0 z-10 flex justify-center items-center overflow-hidden bg-gradient-140  from-cyan-400 to-blue-600">
      <div className="flex flex-col border w-3/4 md:w-[360px] h-[360px] bg-white rounded-lg boxShadow">
        <Header
          {...{
            text,
            setText,
            addToList,
            inputRef
          }}
        />
        <ListSection
          {...{
            list,
            removeFromList,
          }}
        />
      </div>
    </div>
  );
};
