export const Header = ({
  text,
  setText,
  addToList,
  inputRef,
}: {
  text: string;
  setText: any;
  addToList: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}) => (
  <div className="px-2 md:px-4 pt-4">
    <div className="text-xl font-bold">Todo App</div>
    <div className="flex py-2 h-14">
      <input ref={inputRef}
        autoFocus={true}
        className="w-full border rounded-lg px-2"
        value={text}
        placeholder="Type here"
        onChange={(e) => setText(e.target.value)}
      />
      <div
        onClick={addToList}
        className="p-[5px] w-[44px] hover:bg-black/10 rounded-lg ml-1 md:ml-2 cursor-pointer"
      >
        <img className="w-full h-full" src={"/images/plus.png"} alt="" />
      </div>
    </div>
  </div>
);
