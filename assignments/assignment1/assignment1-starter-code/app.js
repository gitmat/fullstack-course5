(function() {
'use strict';
angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);
MsgController.$inject = ['$scope'];

$scope.message = "";
$scope.lunchitems = "";

function LunchCheckController($scope) {
	$scope.CheckLunchItems = function() {
		if($scope.lunchitems != "") {
			var lunch_items = $scope.lunchitems.split(',');
			$scope.message = ((lunch_items.length < 4) ? "Enjoy!" : "Too many items");
		} else {
			$scope.message = "Please enter data first";
		}
	};
}

})();
