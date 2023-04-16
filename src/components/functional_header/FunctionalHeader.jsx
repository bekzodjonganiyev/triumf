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
}) => {
  const onSearch = () => {};
  return (
    <div className="flex">
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
      <div className="flex">
        <input type="search" />
        <button className=""><SearchSvg /></button>
      </div>
      {hasAddBtn ? (
        <div>
          <button>
            {icon}
            {text}
          </button>
        </div>
      ) : null}
    </div>
  );
};
