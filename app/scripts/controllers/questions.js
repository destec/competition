'use strict'

angular.module('competitionApp')
	.controller('QuestionCtrl', function ($scope) {

		$scope.showStatus = false;

		$scope.questions = [
			{id:1, question: "嘉兴学院是在哪一年经过国家教育部批准设立省属本科院校的?", options: ["1999年", "2000年", "2001年","2002年"], answer: 2, explain: "常识问题，请翻阅学生手册"},
			{id:2, question: "2006年嘉兴学院派代表团赴哪个大学?", answer: "韩国关东大学", explain: "随便猜的"},
			{id:3, question: "妹子你电话多少？", options: ["1234", "2234", "3234","4234"], answer: 1, explain: "我也不知道为什么，反正答案就是这个～"}
		];

		$scope.currentPage = 0;
		$scope.totalPage = $scope.questions.length;

		$scope.getAnswer = function (qid) {

			var answerIdx = $scope.questions[qid-1].answer - 1;

			if($scope.questions[qid-1].options != null) {
				$scope.result_s = $scope.questions[qid-1].options[answerIdx];
				$scope.result_l = $scope.questions[qid-1].explain;
			} else {
				$scope.result_s = $scope.questions[qid-1].answer;
				$scope.result_l = $scope.questions[qid-1].explain;			
			}

			$scope.showStatus = !$scope.showStatus;

		};

		var initPage = function () {
			$scope.showStatus = false;
		};
		
		$scope.$watch('currentPage', initPage);
	});

angular.module('competitionApp')
	.filter('paging', function() {
		return function(input, start){
            if(input.length == 0) return;
            return input.slice(start, start+1);
        }
	});