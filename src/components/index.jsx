import { lazyImport } from "../helper/lazyImport.helper";

const Card = lazyImport("../components/card/Card", "Card");
const CircularStatistics = lazyImport("../components/circular_statistics/CircularStatistics", "CircularStatistics");
const Header = lazyImport("../components/header/Header", "Header");
const Layout = lazyImport("../components/layout/Layout", "Layout");
const ModalWindow = lazyImport("../components/modal_window/ModalWindow", "ModalWindow");
const Sidebar = lazyImport("../components/sidebar/Sidebar", "Sidebar");
const Table = lazyImport("../components/table/Table", "Table");

export { 
    Card,
    CircularStatistics,
    Header,
    Layout,
    ModalWindow,
    Sidebar,
    Table, 
};
