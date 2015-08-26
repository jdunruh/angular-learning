var myApp = angular.module("myApp", ['ngSanitize']);
var piTable = [];
for(var i = 0; i <=10; i++) {
    piTable[i] = {id: i, val: i.toString()};
}
var priceComp = function(item1, item2) {return item1.price - item2.price};
var ratingComp = function(item1, item2) {return item1.rating - item2.rating};

myApp.controller("mainCtrl", function($scope) {
    $scope.student_name = "Mickey";
    $scope.fruits = ["apple", "pear", "peach", "pomegranate"];
    $scope.pets = [{id: 1, name: "Dogs"}, {id: 2, name: "Cats"}, {id: 3, name: "Dogs and Cats"}, {
        id: 4,
        name: "Neither"
    }];
    $scope.selectedOption = {id: 4, name: "Neither"};
    $scope.myTry = '';
    $scope.piDigits = piTable;
    $scope.piDisplay = {id: 2, val: 2};
    $scope.tips = [{id: 1, amount: '10%', multiplier: 0.1}, {id:2, amount: '15%', multiplier: 0.15},
        {id:3, amount: '20%', multiplier: 0.2}];
    $scope.selectedTip = {id:1, amount: '10%', multiplier: 0.1};
    $scope.mealAmount = '0';
});

myApp.controller("exerciseCtl", function($scope, $filter, $sce) {
    $scope.FavColor = 'purple';
    $scope.secondsInCentury = 60 * 60 * 24 * 365 * 100;
    $scope.rightNow = $filter('date')(Date.now(), 'fullDate', 'MDT');
    $scope.suits = [$sce.trustAsHtml("&spades;"), "&clubs;", "&hearts;", $sce.trustAsHtml("&diams;")];
    $scope.keys = {a: 1, b:2, c: 3};
    $scope.password = '';
});
myApp.controller("cameraController", function($scope) {
    $scope.sorts = [{id: 1, label: "price", compare: priceComp}, {id: 2, label: "rating", compare: ratingComp}];
    $scope.sortValue = $scope.sorts[0];
    $scope.stock = [
        {
            title: "Nikon D3100 DSLR",
            image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
            rating: 3.4,
            price: 369.99,
            onSale: true
        },
        {
            title: "Canon EOS 70D",
            image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
            rating: 2.0,
            price: 1099.0,
            onSale: false
        },
        {
            title: "Nikon D810A",
            image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
            rating: 4.2,
            price: 3796.95,
            onSale: true
        }
    ].sort($scope.sorts[0].compare);
    $scope.reSort = function() {
        var x = $scope.sorts.filter(function(el){return el.id === $scope.sortValue.id});
        $scope.stock.sort(x[0].compare);
    };
});
myApp.controller("ex6Controller", function($scope) {
    $scope.reverser = '';
    $scope.reversed = '';
    $scope.reverse = function() {
        $scope.reversed = $scope.reverser.split('').reverse().join('');
    };
    $scope.serving = function() {return (Math.floor(($scope.player1Score + $scope.player2Score) / 2) % 2) + 1};
    $scope.player1Score = 0;
    $scope.player2Score = 0;
    $scope.score1 = function() {
        if($scope.player1Score < 11 && $scope.player2Score < 11)
            $scope.player1Score++;
    };
    $scope.score2 = function() {
        if($scope.player1Score < 11 && $scope.player2Score < 11)
            $scope.player2Score++;
    };
    $scope.player1Status = function() {
        if($scope.player1Score >= 11)
            return("won");
        else
            if($scope.player2Score >= 11)
                return("lost");
        return("inprogress");
    };
    $scope.player2Status = function() {
        if($scope.player2Score >= 11)
            return("won");
        else
        if($scope.player1Score >= 11)
            return("lost");
        return("inprogress");
    };
    $scope.reset = function() {
        $scope.player1Score = 0;
        $scope.player2Score = 0;
    };
    $scope.newContact = {name: '', email: '', phone: ''};
    $scope.contacts = [];
    $scope.addContact = function() {
        if($scope.newContact.name != '' && $scope.newContact.email != '' && $scope.phone != '') {
            $scope.contacts.push($scope.newContact);
            $scope.newContact = {name: '', email: '', phone: ''};
        }
    }
});