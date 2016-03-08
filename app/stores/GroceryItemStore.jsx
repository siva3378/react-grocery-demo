var dispatcher = require('./../dispatcher');
var RestHelper = require('./../helpers/RestHelper');

function GroceryItemStore(){
	var items = [];
	var listeners = [];

	RestHelper.get("api/items").then(function(data){
		items = data;
		triggerListeners();
	});

	function getItems(){
		return items;
	}

	function addGroceryItem(item){
		RestHelper.post("api/items", item).then(function(data){
			items.push(item);
			triggerListeners();
		});
	}

	function buyGroceryItem(item, isBuy){
		var index = items.findIndex(function(_item){
			return _item.name == item.name
		});
		items[index].purchased = isBuy;
		triggerListeners();
	}

	function removeGroceryItem(item){
		var index = items.findIndex(function(_item){
			return _item.name == item.name
		});

		items.splice(index,1);
		triggerListeners();
	}
	function onChange(listener){
		listeners.push(listener);
	}

	function triggerListeners(){
		listeners.forEach(function(listener){
			listener(items);
		});
	};

	dispatcher.register(function(event){
		var split = event.type.split(':');
		if(split[0]==='grocery-item'){
			switch(split[1]){
				case "add": 
					addGroceryItem(event.payload);
					break;
				case "remove":
					removeGroceryItem(event.payload);
					break;
				case "buy":
					buyGroceryItem(event.payload, true);
					break;
				case "unbuy":
					buyGroceryItem(event.payload, false);
					break;
			}
		}
	})

	return {
		getItems:getItems,
		onChange:onChange
	}
}

module.exports = new GroceryItemStore();