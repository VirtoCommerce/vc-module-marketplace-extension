using Microsoft.EntityFrameworkCore;
using VirtoCommerce.Platform.Data.Infrastructure;

namespace VirtoCommerce.MarketplaceExtensionModule.Data.Repositories;

public class MarketplaceExtensionModuleDbContext : DbContextBase
{
    public MarketplaceExtensionModuleDbContext(DbContextOptions<MarketplaceExtensionModuleDbContext> options)
        : base(options)
    {
    }

    protected MarketplaceExtensionModuleDbContext(DbContextOptions options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        //modelBuilder.Entity<MarketplaceExtensionModuleEntity>().ToTable("MarketplaceExtensionModule").HasKey(x => x.Id);
        //modelBuilder.Entity<MarketplaceExtensionModuleEntity>().Property(x => x.Id).HasMaxLength(128).ValueGeneratedOnAdd();
    }
}
