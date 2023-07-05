import { lazy } from "react";

import {Loader, FetchingLoader} from "./loader/Loader"
import { FunctionalHeader } from "./functional_header/FunctionalHeader";

const Card = lazy(() => import("./card/Card").then(module => ({default: module.Card})))
const CircularStatistics = lazy(() => import("./circular_statistics/CircularStatistics").then(module => ({default: module.CircularStatistics})))
const Header = lazy(() => import("./header/Header").then(module => ({default: module.Header})))
const Layout = lazy(() => import("./layout/Layout").then(module => ({default: module.Layout})))
const ModalWindow = lazy(() => import("./modal_window/ModalWindow").then(module => ({default: module.ModalWindow})))
const Sidebar = lazy(() => import("./sidebar/Sidebar").then(module => ({default: module.Sidebar})))
const MoneyCard = lazy(() => import("./money_card/MoneyCard").then(module => ({default: module.MoneyCard})))
const Table = lazy(() => import("./table/Table").then(module => ({default: module.Table})))
const ProtectedRoute = lazy(() => import("./protected_route/ProtectedRoute").then(module => ({default: module.ProtectedRoute})))
const AddAndUpdateForm = lazy(() => import("./add_&_update-form/AddAndUpdateForm").then(module => ({default: module.AddAndUpdateForm})))
const SelectedLetterTable = lazy(() => import("./selected_letter_table/SelectedLetterTable").then(module => ({default: module.SelectedLetterTable})))

export { 
    Card,
    CircularStatistics,
    Header,
    Layout,
    ModalWindow,
    Sidebar,
    Table, 
    MoneyCard,
    ProtectedRoute,
    AddAndUpdateForm,
    SelectedLetterTable,
    Loader,
    FetchingLoader,
    FunctionalHeader    
};
