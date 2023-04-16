import { lazy } from "react";

const Organizations = lazy(() => import("./organizations/Organizations").then(module => ({default: module.Organizations})))
const Couriers = lazy(() => import("./couriers/Couriers").then(module => ({default: module.Couriers})))
const Statistics = lazy(() => import("./statistics/Statistics").then(module => ({default: module.Statistics})))
const Incomes = lazy(() => import("./incomes/Incomes").then(module => ({default: module.Incomes})))
const Archives = lazy(() => import("./archives/Archives").then(module => ({default: module.Archives})))
const Admins = lazy(() => import("./admins/Admins").then(module => ({default: module.Admins})))
const LoginForm = lazy(() => import("./login/Login").then(module => ({default: module.LoginForm})))


export {
    Organizations,
    Couriers,
    Statistics,
    Incomes,
    Archives,
    Admins,
    LoginForm
}