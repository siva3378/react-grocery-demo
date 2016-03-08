var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx');

var GroceryListAddItem = React.createClass({
    displayName: 'GroceryListAddItem',
    getInitialState: function() {
        return {
        	item:""
        };
    },
    handleItemName:function(e){
    	console.log(e.target.value);
    	this.setState({
    		item:e.target.value
    	})
    },
    addItem : function(e){
    	e.preventDefault();
    	action.add({
    		name:this.state.item
    	});
    	this.setState({
    		item:""
    	})
    },
    render: function() {
        return (
            <div className="grocery-addItem">
            	<form onSubmit={this.addItem}>
            		<input value={this.state.item} onChange={this.handleItemName} type="text"/>
            		<button>Add Item</button>
            	</form>
            </div>
        );
    }
});

module.exports = GroceryListAddItem;