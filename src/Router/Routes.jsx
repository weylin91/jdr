import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MjLayout from "../Layout/MjLayout";

const App = lazy(() => import("../App"));

const AllRoutes = () => (
	<Routes>
		<Route element={<MjLayout />}>
			<Route exact path="/" element={<App />} />
		</Route>
	</Routes>
);

export default AllRoutes;
