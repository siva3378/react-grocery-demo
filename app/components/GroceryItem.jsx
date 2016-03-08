var React = require('react/addons');
var action = require('./../actions/GroceryItemActionCreator.jsx');

var GroceryItem = React.createClass({
    displayName: 'GroceryItem',
    removeItem:function(e){
    	e.preventDefault();
    	action.remove(this.props.item);
    },
    togglePurchased:function(e){
    	e.preventDefault();

    	if(this.props.item.purchased){
    		action.unbuy(this.props.item);
    	}else{
    		action.buy(this.props.item);
    	}
    },
    render: function() {
    	var item = this.props.item;
        return (
        	<div className="row">
	        	<div className="six columns">
	        		<p className={item.purchased ? "strikethrough":""}>
	            	{item.name}
	            	</p>
	        	</div>
	        	<form className="three columns" onSubmit={this.togglePurchased}>
	        		<button className={this.props.item.purchased?"":"button-primary"}>
	        			{this.props.item.purchased?"Unbuy":"Buy"}
	        		</button>
	        	</form>
	        	<form className="three columns" onSubmit={this.removeItem}>
	        		<button>&times;</button>
	        	</form>
        	</div>
        );
    }
});

module.exports = GroceryItem;