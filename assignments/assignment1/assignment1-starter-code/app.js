(function() {
'use strict';
angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

$scope.message = "";
$scope.lunchitems = "";

function LunchCheckController($scope) {
	$scope.CheckLunchItems = function() {
		var lunch_items = $scope.lunchitems.split(',');
		if(lunch_items.length > 0) {
			$scope.message = ((lunch_items.length < 4) ? "Enjoy!" : "Too many items");
		} else {
			$scope.message = "Please enter data first";
		}
	};
}

})();
