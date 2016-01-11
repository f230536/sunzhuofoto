angular.module('website', [])
     .controller('MainCtrl', function ($scope) {
     	console.log("CHECK");
        $scope.slides = [
            {image: 'static/images/ticket/4票据.jpg', description: 'Image 00'},
            {image: 'static/images/ticket/4票据2.jpg', description: 'Image 01'},
            {image: 'static/images/ticket/4票据3.jpg', description: 'Image 02'},
            {image: 'static/images/ticket/4票据4.jpg', description: 'Image 03'},
        ];
        $scope.currentIndex = 0;

	       $scope.setCurrentSlideIndex = function (index) {
	           $scope.currentIndex = index;
	       };

	       $scope.isCurrentSlideIndex = function (index) {
	           return $scope.currentIndex === index;
	       };
    });