using System.Collections.Generic;
using VirtoCommerce.Platform.Core.Settings;

namespace VirtoCommerce.MarketplaceExtensionModule.Core;

public static class ModuleConstants
{
    public static class Security
    {
        public static class Permissions
        {
            public const string Access = "MarketplaceExtensionModule:access";
            public const string Create = "MarketplaceExtensionModule:create";
            public const string Read = "MarketplaceExtensionModule:read";
            public const string Update = "MarketplaceExtensionModule:update";
            public const string Delete = "MarketplaceExtensionModule:delete";

            public static string[] AllPermissions { get; } =
            {
                Access,
                Create,
                Read,
                Update,
                Delete,
            };
        }
    }

    public static class Settings
    {
        public static class General
        {
            public static SettingDescriptor MarketplaceExtensionModuleEnabled { get; } = new()
            {
                Name = "MarketplaceExtensionModule.MarketplaceExtensionModuleEnabled",
                GroupName = "MarketplaceExtensionModule|General",
                ValueType = SettingValueType.Boolean,
                DefaultValue = false,
            };

            public static SettingDescriptor MarketplaceExtensionModulePassword { get; } = new()
            {
                Name = "MarketplaceExtensionModule.MarketplaceExtensionModulePassword",
                GroupName = "MarketplaceExtensionModule|Advanced",
                ValueType = SettingValueType.SecureString,
                DefaultValue = "qwerty",
            };

            public static IEnumerable<SettingDescriptor> AllGeneralSettings
            {
                get
                {
                    yield return MarketplaceExtensionModuleEnabled;
                    yield return MarketplaceExtensionModulePassword;
                }
            }
        }

        public static IEnumerable<SettingDescriptor> AllSettings
        {
            get
            {
                return General.AllGeneralSettings;
            }
        }
    }
}
