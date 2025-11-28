// All components mapping with path for internal routes

import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/protected/Dashboard"));
const Welcome = lazy(() => import("../pages/protected/Welcome"));
const Page404 = lazy(() => import("../pages/protected/404"));
const Blank = lazy(() => import("../pages/protected/Blank"));
const Charts = lazy(() => import("../pages/protected/Charts"));
const Leads = lazy(() => import("../pages/protected/Leads"));
const Integration = lazy(() => import("../pages/protected/Integration"));
const Calendar = lazy(() => import("../pages/protected/Calendar"));
const Team = lazy(() => import("../pages/protected/Team"));
const Transactions = lazy(() => import("../pages/protected/Transactions"));
const Bills = lazy(() => import("../pages/protected/Bills"));
const ProfileSettings = lazy(() =>
  import("../pages/protected/ProfileSettings")
);
const GettingStarted = lazy(() => import("../pages/GettingStarted"));
const DocFeatures = lazy(() => import("../pages/DocFeatures"));
const DocComponents = lazy(() => import("../pages/DocComponents"));
const Receptionlist = lazy(() => import("../features/user/Credential"));
const InternalEngineer = lazy(() =>
  import("../features/user/InternalEngineer")
);

const Cabinates = lazy(() => import("../features/user/CabinetUpdates"));

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/companies",
    component: Receptionlist,
  },
  {
    path: "/visitor", // Add this if you need a separate page for internal engineer
    component: InternalEngineer, // You can use the same component or create a new one
  },

  {
    path: "/idmanagment", // Add this if you need a separate page for internal engineer
    component: Cabinates, // You can use the same component or create a new one
  },
  // {
  //   path: "/welcome",
  //   component: Welcome,
  // },
  // {
  //   path: "/leads",
  //   component: Leads,
  // },
  // {
  //   path: "/settings-team",
  //   component: Team,
  // },
  // {
  //   path: "/calendar",
  //   component: Calendar,
  // },
  // {
  //   path: "/transactions",
  //   component: Transactions,
  // },
  // {
  //   path: "/settings-profile",
  //   component: ProfileSettings,
  // },
  // {
  //   path: "/settings-billing",
  //   component: Bills,
  // },
  // {
  //   path: "/getting-started",
  //   component: GettingStarted,
  // },
  // {
  //   path: "/features",
  //   component: DocFeatures,
  // },
  // {
  //   path: "/components",
  //   component: DocComponents,
  // },
  // {
  //   path: "/integration",
  //   component: Integration,
  // },
  // {
  //   path: "/charts",
  //   component: Charts,
  // },
  // {
  //   path: "/404",
  //   component: Page404,
  // },
  // {
  //   path: "/blank",
  //   component: Blank,
  // },
];

export default routes;
