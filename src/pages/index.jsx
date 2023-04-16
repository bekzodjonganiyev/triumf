import { lazy } from "react";

const Organizations = lazy(() => import("./organizations/Organizations").then(module => ({default: module.Organizations})))
const OrganizationsList = lazy(() => import("./organizations/OragnizationsList").then(module => ({default: module.OragnizationsList})))
const OrganizationsProfile = lazy(() => import("./organizations/OrganizationsProfile").then(module => ({default: module.OrganizationsProfile})))

const Couriers = lazy(() => import("./couriers/Couriers").then(module => ({default: module.Couriers})))
const CouriersProfile = lazy(() => import("./couriers/CouriersProfile").then(module => ({default: module.CouriersProfile})))

const Statistics = lazy(() => import("./statistics/Statistics").then(module => ({default: module.Statistics})))
const Incomes = lazy(() => import("./incomes/Incomes").then(module => ({default: module.Incomes})))
const Archives = lazy(() => import("./archives/Archives").then(module => ({default: module.Archives})))
const Admins = lazy(() => import("./admins/Admins").then(module => ({default: module.Admins})))
const LoginForm = lazy(() => import("./login/Login").then(module => ({default: module.LoginForm})))


export {
    Organizations,
    OrganizationsList,
    OrganizationsProfile,
    Couriers,
    CouriersProfile,
    Statistics,
    Incomes,
    Archives,
    Admins,
    LoginForm
}