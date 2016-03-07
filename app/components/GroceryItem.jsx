var React = require('react/addons');

var React = require('react');

var GroceryItem = React.createClass({
    displayName: 'GroceryItem',
    render: function() {
    	var item = this.props.item;
        return (
            <h3 className={item.purchased ? "strikethrough":""}>
            	{item.name}
            </h3>
        );
    }
});

module.exports = GroceryItem;