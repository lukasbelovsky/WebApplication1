namespace WebApplication1.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addDriver : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Drivers",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        FirstName = c.String(nullable: false),
                        LastName = c.String(nullable: false),
                        City = c.String(maxLength: 20),
                        DateOfBirth = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Drivers");
        }
    }
}
