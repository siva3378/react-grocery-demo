var React = require('react/addons');
var GroceryItem = require('./GroceryItem.jsx');
var GroceryListAddItem = require('./GroceryListAddItem.jsx');

var GroceryItemList = React.createClass({
    displayName: 'GroceryItemList',
    render : function() {
    	var items = this.props.items;
    	var groceryList;
    	if(items){
    		groceryList = items.map(function(item,i){
	    		return (
	    			<GroceryItem item={item} key={"item"+i}>{item.name}</GroceryItem>
	    		);
    		})	
    	}else{
    		groceryList = (<li>There is no list</li>);
    	}
    	
        return (
            <div>
            	<div>
            		<h1> Grocery Listify </h1>
            		{groceryList}
            		<hr />
            	</div>
            	<GroceryListAddItem />
            </div>

        );
    }
});

module.exports = GroceryItemList;