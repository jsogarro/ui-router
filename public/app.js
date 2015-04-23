var App = angular.module('sneakerApp', ['ui.router']);

App.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html'
        })
        .state('home.new', {
            url: "new",
            templateUrl: "new.html",
            controller: function($scope) {
           $scope.sneakers = [
                                    {
                                        name: 'Air Jordan 10',
                                        color: 'White/Black/Red',
                                        size: 14,
                                        brand: 'Nike',
                                        price: 350,
                                        image: 'http://www.refinedguy.com/wp-content/uploads/2013/03/11-air-jordan-x-23-things-you-probably-didnt-know-about-air-jordans.jpg',
                                        id: 1
                                    },
                                    {
                                        name: 'Air Max 90',
                                        color: 'Red',
                                        size: 14,
                                        brand: 'Nike',
                                        price: 2500,
                                        image: 'http://www.2015sportsonline.com/images/Nike_Air_Max_Mens/Air_Max_90_Hyperfuse_PRM_Mens_Shoes_Red_Outlet.jpg',
                                        id: 2
                                    },
                                    {
                                        name: 'Foamposite',
                                        color: 'Black/White/Blue',
                                        size: 14,
                                        brand: 'Nike',
                                        price: 275,
                                        image: 'http://www.2015newjordans.com/wp-content/uploads/2014/06/Nike-Air-Foamposite-One-Shooting-Stars-White-Black-Royal-Blue-White-For-Sale-4.jpg',
                                        id: 3
                                    }
                                ];  
            }
        })
        .state('home.sale', {
            url: 'sale', 
            templateUrl: 'sale.html'
        })
        .state('home.promo', {
            url: 'promo',
            templateUrl: 'promo.html',
            controller: function($scope, userAuth) {
                $scope.promoMember = userAuth.promoMember;

                $scope.deals = ["23% off all Jordans", "Free shipping for orders over $200"];

            },
            resolve: {
                userAuth: function() {
                    return { promoMember: false };
                }
            }
        })
        .state('cart', {
            views: {
                '': { templateUrl: 'cart.html' },
                'side@cart': { 
                    templateUrl: 'side.html',
                    controller: 'menuController'
                },
                'items@cart': { 
                    templateUrl: 'items.html',
                    controller: 'itemsController'
                }
            }
        })


        ;
});


App.controller('itemsController', function($scope, $state) {
   
    $scope.title = "Items in Cart";

    $scope.sneakers = [
        {
            name: 'Air Jordan 10',
            color: 'White/Black/Red',
            size: 14,
            brand: 'Nike',
            price: 350
        },
        {
            name: 'Air Max 90',
            color: 'Red',
            size: 14,
            brand: 'Nike',
            price: 2500
        },
        {
            name: 'Foamposite',
            color: 'Black/White/Blue',
            size: 14,
            brand: 'Nike',
            price: 275
        }
    ];
    
});

App.controller('menuController', function($scope) {

    $scope.title = "Past Purchases";

    $scope.recommendedItems = [
        'Air Jordan 12',
        'Air Uptempo',
        'Converse Chuck Taylor',
        'Reebok Classics',
        'Nike Air Force One'
    ];

});