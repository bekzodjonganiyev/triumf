import { Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { Corparation } from "../../assets/icons";

export const Card = ({ obj, hasEvent1, hasEvent2, handleBtn1, handleBtn2 }) => {
  return (
    <div className="flex flex-col items-center py-8 px-5 gap-5 border border-gray-400 rounded-xl w-56">
      <div className="gradient w-28 h-28 rounded-full flex items-center justify-center">
        {obj.icon ? (
          <img
            src={obj.icon}
            alt={obj.title}
            className="w-full rounded-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <span>
            <Corparation color={"#fff"} width={"50"} height={"50"} />
          </span>
        )}
      </div>
      <p className="font-semibold text-center line-clamp-2">{obj.name}</p>
      {hasEvent1 ? (
        <button
          className="bg-primary text-white text-center rounded-md p-2 w-full"
          onClick={() => handleBtn1()}
        >
          {obj.firstActionTitle}
        </button>
      ) : (
        <Link
          to={obj.firstUrl}
          className="bg-primary text-white text-center rounded-md p-2 w-full"
        >
          {obj.firstActionTitle}
        </Link>
      )}

      {hasEvent2 ? (
        <Popconfirm
          title="Delete the task?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => handleBtn2()}
          okButtonProps={{style: {background: "red"}}}
        >
          <button className="border border-primary text-primary text-center rounded-md p-2 w-full">
            {obj.secondActionTitle}
          </button>
        </Popconfirm>
      ) : (
        <Link
          to={obj.secondUrl}
          className="border border-primary text-primary text-center rounded-md p-2 w-full"
        >
          {obj.secondActionTitle}
        </Link>
      )}
    </div>
  );
};
