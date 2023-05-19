export   const ClearSection = ({
    list,
    removeFromList,
  }: {
    list: string[];
    removeFromList: (t: "DELETE" | "CLEAR", i?: number) => void;
  }) => (
    <div className="text-center p-3">
      <span
        onClick={() => removeFromList("CLEAR")}
        className={`p-1 px-2 bg-red-500 hover:bg-red-400 text-white text-sm rounded-md font-bold ${
          list.length ? "cursor-pointer" : "cursor-not-allowed bg-red-400"
        }`}
      >
        Clear
      </span>
    </div>
  );
