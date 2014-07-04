/**
 * 
 */
(function() {
	var app = angular.module('store', []);
	app.controller('StoreController',function(){
		this.product=gem;
	});
	
	var gem={
			price:8.66,
			name:'SampleGem',
			canPurchase:false
	};
}());