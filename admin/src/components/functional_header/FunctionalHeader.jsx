// import { AudioOutlined } from '@ant-design/icons';
import { Input } from "antd";
import { SearchSvg } from "../../assets/icons";
const { Search } = Input;

export const FunctionalHeader = ({
  hasStatistic,
  hasAddBtn,
  count,
  payment,
  icon,
  text,
  handleBtn,
  handleSearch,
  classNames
}) => {
  const onSearch = () => {};
  return (
    <div className={`w-full flex items-center ${classNames}`}>
      {hasStatistic ? (
        <div>
          <p>
            Jami: <b>{count}</b>
          </p>
          <p>
            To'lov: <b>{payment}</b>
          </p>
        </div>
      ) : null}
      <div className="flex border-2 border-[rgba(0,0,0,0.15)] p-1 rounded-xl focus:shadow-md">
        <input
          type="text"
          className="p-2 outline-none w-80"
          placeholder="Qidirish"
        />
        <button className="bg-primary py-0.5 px-6 rounded-r-2xl">
          <SearchSvg />
        </button>
      </div>
      {hasAddBtn ? (
        <div>
          <button
            className="bg-primary text-white flex py-3 px-6 rounded-xl"
            onClick={() => handleBtn()}
          >
            <span className="mr-2">{icon}</span>
            {text}
          </button>
        </div>
      ) : null}
    </div>
  );
};
