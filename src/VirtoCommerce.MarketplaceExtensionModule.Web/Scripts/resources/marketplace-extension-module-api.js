angular.module('MarketplaceExtensionModule')
    .factory('MarketplaceExtensionModule.webApi', ['$resource', function ($resource) {
        return $resource('api/marketplace-extension-module');
    }]);
