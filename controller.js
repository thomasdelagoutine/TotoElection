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
        $scope.votes = [];
        $http({
            method: 'GET',
            url: '/getAllCandidates'
        }).then(function successCallback(response) {
            response.data.forEach(function (aCandidate) {
                $scope.candidates.push(aCandidate);
            });
        }, function errorCallback(response) {
            console.log("Impossible d'avoir les candidats, merde c'est la fin de la démocratie");
        });

        var req = {
            method: 'POST',
            url: '/getAllPourcentages',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                idUser: localStorage.idUser
            }
        };


        $http(req).then(function successCallBack(response) {
            response.data.forEach(function (aVote) {
                $scope.votes.push(aVote);
                $scope.candidates.forEach(function (aCandidat) {
                    if (aCandidat.id === aVote.idCandidat) {
                        aCandidat.pourcentage = aVote.pourcentage;
                    }
                })
            })
        }, function errorCallback(response) {
            console.log("Impossible d'avoir les candidats, merde c'est la fin de la démocratie");
        });


        $scope.name = $rootScope.name;

        $scope.deco = function () {
            localStorage.removeItem("name");
            localStorage.removeItem("surname");
            localStorage.removeItem("login");
            localStorage.removeItem("idUser");
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
                $rootScope.idUser = response.data.user.idUser;
                localStorage.setItem("login", $scope.login);
                localStorage.setItem("idUser", response.data.user.idUser);
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
        $scope.inscriptionError = "";
        $scope.inscrire = function () {
            if ($scope.login == "" || $scope.name == "" || $scope.surname == "" || $scope.email == "" ||
                $scope.password == "" || $scope.password2 == "") {
                $scope.inscriptionError = "Renseignez tous les champs";
            }
            else {
                var req = {
                    method: 'POST',
                    url: '/addUser',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: {
                        login: $scope.login,
                        password: $scope.password,
                        name: $scope.name,
                        surname: $scope.surname,
                        email: $scope.email
                    }
                };
                $http(req).then(function (response) {
                    if (response.status == 200) {
                        $scope.inscriptionError = "Ajouté";
                        $location.path("/connexion");
                    }
                }, function (response) {
                    console.log(response);
                    if (response.status == 409) {
                        $scope.inscriptionError = "Ne sois pas un escroc comme les gens présents ici, cet utilisateur existe déja !";
                    }
                });
            }

        }

    }
]);