import { lazy } from "react";

const Card = lazy(() => import("./card/Card").then(module => ({default: module.Card})))
const CircularStatistics = lazy(() => import("./circular_statistics/CircularStatistics").then(module => ({default: module.CircularStatistics})))
const Header = lazy(() => import("./header/Header").then(module => ({default: module.Header})))
const Layout = lazy(() => import("./layout/Layout").then(module => ({default: module.Layout})))
const ModalWindow = lazy(() => import("./modal_window/ModalWindow").then(module => ({default: module.ModalWindow})))
const Sidebar = lazy(() => import("./sidebar/Sidebar").then(module => ({default: module.Sidebar})))
const MoneyCard = lazy(() => import("./money_card/MoneyCard").then(module => ({default: module.MoneyCard})))
const Loader = lazy(() => import("./loader/Loader").then(module => ({default: module.Loader})))
const Table = lazy(() => import("./table/Table").then(module => ({default: module.Table})))


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
