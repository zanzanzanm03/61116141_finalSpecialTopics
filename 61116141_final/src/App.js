import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail  from './container/Detail';
import Product from './container/Product';
import Cart from './container/Cart';
import Home from "./container/Home";


class App extends Component {
	renderRouter() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
        		<Route exact path="/detail" component={Detail} />
				<Route exact path="/product" component={Product} />
				<Route exact path="/cart" component={Cart} />
			</Switch>
		);
	}

	render() {
		return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
	}

}

export default App;