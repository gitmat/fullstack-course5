(function() {
'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListAddController', ShoppingListAddController)
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ShoppingListAddController.$inject = ['ShoppingListCheckOffService'];
function ShoppingListAddController(ShoppingListCheckOffService) {
	var shoppingList = this;
	shoppingList.itemName = "";
	shoppingList.itemQuantity = "";
	
	shoppingList.addItem = function() {
		ShoppingListCheckOffService.addItem(shoppingList.itemName, shoppingList.itemQuantity);
	};
}

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	var shoppingList = this;
	
	shoppingList.items = ShoppingListCheckOffService.getItemsToBuy();
	
	shoppingList.Buy = function(itemIndex) {
		var item = shoppingList.items[itemIndex]
		ShoppingListCheckOffService.buyItem(item.name, item.quantity, itemIndex);
	};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	var cart = this;
	cart.items = ShoppingListCheckOffService.getItemsBought();
}

function ShoppingListCheckOffService() {
	var service = this;
	var itemsBought = [];
	var itemsToBuy = [
		{name: 'cookies', quantity: 10},
		{name: 'tacos', quantity: 2},
		{name: 'pizza', quantity: 1},
		{name: 'soda can', quantity: 6},
		{name: 'ice cream cone', quantity: 2}
	];
	
	service.addItem = function(itemName, quantity) {
		var item = {
			name: itemName,
			quantity: quantity
		};
		itemsToBuy.push(item);
	};
	
	service.buyItem = function(itemName, quantity, itemIndex) {
		var item = {
			name: itemName,
			quantity: quantity
		};
		itemsBought.push(item);
		itemsToBuy.splice(itemIndex, 1);
	};
	
	service.getItemsBought = function() {
		return itemsBought;
	};
	
	service.getItemsToBuy = function() {
		return itemsToBuy;
	};
}
	
})();