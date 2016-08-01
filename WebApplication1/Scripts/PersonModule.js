var app = angular.module('app1', []);
app.controller('ctrl1', function ($scope)
{
    $scope.first = 1;
    $scope.Employee = { EmployeeId: '1', Name: 'Brian', Gender: 'Male', City: 'Philadelphia' };
});