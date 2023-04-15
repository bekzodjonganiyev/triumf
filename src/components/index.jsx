import { lazyImport } from "../helper/lazyImport.helper";

import { Loader } from "./loader/Loader";

const Card = lazyImport("../components/card/Card", "Card");
const CircularStatistics = lazyImport("../components/circular_statistics/CircularStatistics", "CircularStatistics");
const Header = lazyImport("../components/header/Header", "Header");
const Layout = lazyImport("../components/layout/Layout", "Layout");
const ModalWindow = lazyImport("../components/modal_window/ModalWindow", "ModalWindow");
const Sidebar = lazyImport("../components/sidebar/Sidebar", "Sidebar");
const Table = lazyImport("../components/table/Table", "Table");
const MoneyCard = lazyImport("../components/money_card/MoneyCard", "MoneyCard");
// const Loader = lazyImport("../components/loader/Loader", "Loader");


export { 
    Card,
    CircularStatistics,
    Header,
    Layout,
    ModalWindow,
    Sidebar,
    Table, 
    MoneyCard,
    Loader
};
