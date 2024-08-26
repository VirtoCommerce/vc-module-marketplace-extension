// Call this to register your module to main application
var moduleName = 'MarketplaceExtensionModule';

if (AppDependencies !== undefined) {
    AppDependencies.push(moduleName);
}

angular.module(moduleName, [])
    .config(['$stateProvider',
        function ($stateProvider) {
            $stateProvider
                .state('workspace.MarketplaceExtensionModuleState', {
                    url: '/MarketplaceExtensionModule',
                    templateUrl: '$(Platform)/Scripts/common/templates/home.tpl.html',
                    controller: [
                        'platformWebApp.bladeNavigationService',
                        function (bladeNavigationService) {
                            var newBlade = {
                                id: 'blade1',
                                controller: 'MarketplaceExtensionModule.helloWorldController',
                                template: 'Modules/$(VirtoCommerce.MarketplaceExtensionModule)/Scripts/blades/hello-world.html',
                                isClosingDisabled: true,
                            };
                            bladeNavigationService.showBlade(newBlade);
                        }
                    ]
                });
        }
    ])
    .run(['platformWebApp.mainMenuService', '$state',
        function (mainMenuService, $state) {
            //Register module in main menu
            var menuItem = {
                path: 'browse/MarketplaceExtensionModule',
                icon: 'fa fa-cube',
                title: 'MarketplaceExtensionModule',
                priority: 100,
                action: function () { $state.go('workspace.MarketplaceExtensionModuleState'); },
                permission: 'MarketplaceExtensionModule:access',
            };
            mainMenuService.addMenuItem(menuItem);
        }
    ]);
