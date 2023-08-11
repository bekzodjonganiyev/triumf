import { t } from "i18next";
import { SearchSvg } from "../../../assets/icons";

import { useAppContext } from "../../../context/app.context";


export const FunctionalHeader = ({
  hasStatistic,
  hasAddBtn,
  count,
  payment,
  icon,
  text,
  handleBtn,
  handleSearch,
  classNames,
}) => {
  const onSearch = () => {};
  const {searchValue, setSearchValue} = useAppContext()
  return (
    <div className={`w-full flex items-center ${classNames}`}>
      {hasStatistic ? (
        <div>
          <p>
            {t("Total")}: <b>{count}</b>
          </p>
          <p>
            {t("Price")}: <b>{payment}</b>
          </p>
        </div>
      ) : null}
      <div className="flex border-2 border-[rgba(0,0,0,0.15)] p-1 rounded-xl focus:shadow-md">
        <input
          type="text"
          className="p-2 outline-none w-80"
          placeholder={t("Search")}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="bg-secondary py-0.5 px-6 rounded-r-2xl">
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
