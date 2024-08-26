angular.module('MarketplaceExtensionModule')
    .controller('MarketplaceExtensionModule.helloWorldController', ['$scope', 'MarketplaceExtensionModule.webApi', function ($scope, api) {
        var blade = $scope.blade;
        blade.title = 'MarketplaceExtensionModule';

        blade.refresh = function () {
            api.get(function (data) {
                blade.title = 'MarketplaceExtensionModule.blades.hello-world.title';
                blade.data = data.result;
                blade.isLoading = false;
            });
        };

        blade.refresh();
    }]);
