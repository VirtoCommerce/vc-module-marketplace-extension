using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace VirtoCommerce.MarketplaceExtensionModule.Data.Repositories;

public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<MarketplaceExtensionModuleDbContext>
{
    public MarketplaceExtensionModuleDbContext CreateDbContext(string[] args)
    {
        var builder = new DbContextOptionsBuilder<MarketplaceExtensionModuleDbContext>();
        var connectionString = args.Length != 0 ? args[0] : "Server=(local);User=virto;Password=virto;Database=VirtoCommerce3;";

        builder.UseSqlServer(
            connectionString,
            options => options.MigrationsAssembly(GetType().Assembly.GetName().Name));

        return new MarketplaceExtensionModuleDbContext(builder.Options);
    }
}
