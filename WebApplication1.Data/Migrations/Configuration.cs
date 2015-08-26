namespace WebApplication1.Data.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using WebApplication1.Model;

    internal sealed class Configuration : DbMigrationsConfiguration<WebApplication1.Data.DataContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(WebApplication1.Data.DataContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.Zips.AddOrUpdate(
                  z => z.Code,
                  new ZIP { Id = Guid.NewGuid(), Code = "76001" },
                  new ZIP { Id = Guid.NewGuid(), Code = "76101" },
                  new ZIP { Id = Guid.NewGuid(), Code = "76201" },
                  new ZIP { Id = Guid.NewGuid(), Code = "76314" },
                  new ZIP { Id = Guid.NewGuid(), Code = "76401" }
                );
        }
    }
}
