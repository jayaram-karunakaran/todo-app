import { ClearSection } from "./clear";

export const ListSection = ({
  list,
  removeFromList,
}: {
  list: string[];
  removeFromList: (t: "DELETE" | "CLEAR", i?: number) => void;
}) => (
  <>
    <div className="flex-1 px-2 md:px-4 pb-4 overflow-y-scroll">
      {list.map((e, i) => {
        return (
          <div
            key={i.toString()}
            className={`flex items-center py-2 px-1 ${
              i === list.length - 1 ? "" : "border-b border-dashed"
            }`}
          >
            <div className="flex-1 text-sm md:text-base truncate">{e}</div>
            <div onClick={() => removeFromList("DELETE", i)} className="p-1 hover:bg-black/10 rounded-lg cursor-pointer">
              <img
                className="w-6 h-6"
                src={"/images/trash.png"}
                alt=""
              />
            </div>
          </div>
        );
      })}
    </div>
    <ClearSection
      {...{
        list,
        removeFromList,
      }}
    />
  </>
);
