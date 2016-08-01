var app = angular.module('appnew', []);
app.controller('citiesCtrl', function ($scope) {
    $scope.first = 1;
    $scope.second = 2;
    $scope.Employee = { CityId: '1', Name: 'New York' };
    $scope.Calculation = '';
    $scope.updateValue=function()
    {
        $scope.Calculation = $scope.first + '+' + $scope.second + "=" + (+$scope.first + $scope.second);
    };

});
app.controller('RamdomCtrl', function ($scope)
{
    $scope.Random1 = Math.floor(Math.random()*4);
    $scope.Random2 = Math.floor(Math.random() * 10 + 1);
    var badfeelings = ["Uno", "Dos", "Tres", "Cuatro"];
    var goodmood = ["Cinco", "Seis", "Siete", "Ocho"];
    $scope.bad = badfeelings[Math.floor(Math.random() * 4)];
    $scope.good = goodmood[Math.floor(Math.random() * 4)];
});
app.controller('Groceries', function ($scope)
{
    $scope.listOfProducts = [{ item: "Tomatoes", purchased: "false" },
                        { item: "Bread", purchased: "false" },
                        { item: "Humus", purchased: "false" },
                        { item: "Potatoes", purchased: "false" }
    ];

});

app.controller('List', function ($scope) {
    $scope.List = function getList()
    {
        return $scope.showList ? "ulgrocerielist.cshtml" : "groceriesList.cshtml";
    }
    

});

app.controller('mouse', function ($scope) 
{
    $scope.click = 0;
  
});

app.controller('button1', function ($scope) {
    $scope.disablebutton = 1;

});


app.controller('Groceries2', function ($scope) {
    $scope.listOfProducts = [{ item: "Tomatoes", purchased: "true" },
                        { item: "Bread", purchased: "false" },
                        { item: "Humus", purchased: "true" },
                        { item: "Potatoes", purchased: "false" }
    ];
    $scope.productSelected = $scope.listOfProducts[0];
});