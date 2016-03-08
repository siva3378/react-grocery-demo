var dispatcher = require('./../dispatcher');
console.log("Here is dispatcher", dispatcher);

module.exports={
	add:function(item){
		dispatcher.dispatch({
			payload:item,
			type:"grocery-item:add"
		})
	},
	remove:function(item){
		dispatcher.dispatch({
			payload:item,
			type:"grocery-item:remove"
		})
	},
	buy:function(item){
		dispatcher.dispatch({
			payload:item,
			type:"grocery-item:buy"
		})
	},
	unbuy:function(item){
		dispatcher.dispatch({
			payload:item,
			type:"grocery-item:unbuy"
		})
	}

}
