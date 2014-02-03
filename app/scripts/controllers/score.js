'use strict';

angular.module('competitionApp')
	.controller('ScoreCtrl', function ($scope) {

		var initScore = 100;

		$scope.teams = [
	        {id: 1, table: 1, name: "数信学院", score: initScore},
	        {id: 2, table: 2, name: "外国语学院", score: initScore},
	        {id: 3, table: 3, name: "机电学院", score: initScore},
	        {id: 4, table: 4, name: "生化学院", score: initScore},
	        {id: 5, table: 5, name: "商学院", score: initScore},
	        {id: 6, table: 6, name: "材纺学院", score: initScore},
	        {id: 7, table: 7, name: "医学院", score: initScore},
	        {id: 8, table: 8, name: "建工学院", score: initScore},
	        {id: 9, table: 9, name: "设计学院", score: initScore},
	        {id: 10, table: 10, name: "南湖学院", score: initScore},
	        {id: 11, table: 11, name: "文法学院", score: initScore},
	        {id: 12, table: 12, name: "平湖校区", score: initScore}
	    ];

		$scope.addScore = function(id, point) {
	    	/*var result = $scope.teams[id-1].score + 10;*/
	    	$scope.teams[id-1].score += point;
	    	return $scope.teams[id-1].score;
	    };
	});

/*angular.module('competitionApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/