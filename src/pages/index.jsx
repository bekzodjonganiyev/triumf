import { lazyImport } from "../helper/lazyImport.helper";

const Organizations = lazyImport("../pages/organizations/Organizations", "Organizations"); 
const Couriers = lazyImport("../pages/couriers/Couriers", "Couriers"); 
const Statistics = lazyImport("../pages/statistics/Statistics", "Statistics"); 
const Incomes = lazyImport("../pages/incomes/Incomes", "Incomes"); 
const Archives = lazyImport("../pages/archives/Archives", "Archives"); 
const Admins = lazyImport("../pages/admins/Admins", "Admins"); 

export {
    Organizations,
    Couriers,
    Statistics,
    Incomes,
    Archives,
    Admins,
}