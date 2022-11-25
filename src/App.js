// import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import Home from "./pages/Home";
// import Service from "./pages/Service";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import Navbar from "./pages/common/Navbar";
// import Footer from "./pages/common/Footer";
// import Career from "./pages/Career";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Login from "./components/pages/Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard";
import React, { useState, useEffect } from 'react';
const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(null);
	useEffect(() => {
		setIsAuthenticated(JSON.parse(localStorage.getItem('is_authenticated')));
	}, []);

	return (
		// <>
		// 	<BrowserRouter>
		// 		<Navbar />
		// 		<Switch>

		// 			<Route exact path="/" component={Home} />
		// 			<Route exact path="/about" component={AboutUs} />
		// 			<Route exact path="/contact" component={ContactUs} />
		// 			<Route exact path="/login" component={Login} />
		// 			<Redirect to="/" />
		// 		</Switch>
		// 		{/* <Footer /> */}

		// 	</BrowserRouter>
		// </>
		<>
			{isAuthenticated ? (
				<Dashboard setIsAuthenticated={setIsAuthenticated} />
			) : (
				<Login setIsAuthenticated={setIsAuthenticated} />
			)}
		</>
	);
};

export default App;