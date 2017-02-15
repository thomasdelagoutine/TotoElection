/**
 * Created by Thomas on 19/09/2016.
 */
app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.candidates = [];
    $http({
        method: 'GET',
        url: '/getAllCandidates'
    }).then(function successCallback(response) {
        response.data.forEach(function (aCandidate) {
            $scope.candidates.push(aCandidate);
        });
    }, function errorCallback(response) {
        console.log("Impossible d'avoir les candidats, merde c'est la fin de la démoncratie");
    });
    if (localStorage.length > 0) {
        $scope.name = localStorage.name;
    }

    console.log(localStorage.getItem("lastname"));
}]);

app.controller('authController', ['$scope', '$http', '$location', function ($scope, $http, $location) {
    $scope.login = "";
    $scope.password = "";
    $scope.connexion = function () {
        var req = {
            method: 'POST',
            url: '/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                login: $scope.login,
                password: $scope.password
            }
        };

        $http(req).then(function (response) {
            console.log(response.data);
            localStorage.name = response.data.user.name;
            localStorage.surname = response.data.user.surname;
            localStorage.login = $scope.login;
            $location.path("/home");

        }, function (response) {
            console.log(response);
        });
    }


}]);