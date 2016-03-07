var React = require('react/addons');
var GroceryItemList = require('./components/GroceryItemList.jsx');

React.render(<GroceryItemList />, app);

var initial = [{
	name:"Ice Cream"
},{
	name:"Waffles"
},{
	name:"Candy",
	purchased:true
},{
	name:"Snarks"
}];

React.render(<GroceryItemList items={initial} />, app);