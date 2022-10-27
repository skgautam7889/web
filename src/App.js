import React from "react";
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
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
const App = () => {
	return (
		<>
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={AboutUs} />
				{/*<Route exact path="/service" component={Service} />
				<Route exact path="/career" component={Career} />
				<Route exact path="/contact" component={Contact} />
				<Redirect to="/" /> */}
			</Switch>
			{/* <Footer /> */}

		</BrowserRouter>
		</>
	);
};

export default App;