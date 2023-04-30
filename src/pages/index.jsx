import { lazy } from "react";

import { LoginForm } from "./login/LoginOrg";

const Lists = lazy(() => import("./lists/Lists").then(module => ({default: module.Lists})))
const Statistics = lazy(() => import("./statistics/Statistics").then(module => ({default: module.Statistics})))
const Archive = lazy(() => import("./archive/Archive").then(module => ({default: module.Archive})))

export {
    LoginForm,
    Lists,
    Statistics,
    Archive
}