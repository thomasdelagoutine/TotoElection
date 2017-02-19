/**
 * Created by Thomas on 19/09/2016.
 */

app.run(function ($rootScope) {

});
app.controller('mainCtrl', ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {
        if (localStorage.login == null) {
            $location.path("/connexion");
        }
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


        $scope.name = $rootScope.name;

        $scope.deco = function () {
            localStorage.removeItem("name");
            localStorage.removeItem("surname");
            localStorage.removeItem("login");
            $location.path("/connexion");
        }

    }]);

app.controller('authController', ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {
        $rootScope.name = '';
        $rootScope.surname = '';
        console.log($rootScope.color)
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
                $rootScope.name = response.data.user.name;
                $rootScope.surname = response.data.user.surname;
                localStorage.setItem("login", $scope.login);
                $location.path("/home");

            }, function (response) {
                console.log(response);
            });
        };

        $scope.inscription = function () {
            $location.path("/inscription");
        }

    }]);

app.controller('inscriptionController', ['$scope', '$rootScope', '$http', '$location',
    function ($scope, $rootScope, $http, $location) {
        $scope.inscription = function (){
            
        }

    }
]);