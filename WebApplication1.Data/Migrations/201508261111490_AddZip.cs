namespace WebApplication1.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddZip : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.ZIPs",
                c => new
                    {
                        Id = c.Guid(nullable: false),
                        Code = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            AddColumn("dbo.Drivers", "ZipId", c => c.Guid());
            CreateIndex("dbo.Drivers", "ZipId");
            AddForeignKey("dbo.Drivers", "ZipId", "dbo.ZIPs", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Drivers", "ZipId", "dbo.ZIPs");
            DropIndex("dbo.Drivers", new[] { "ZipId" });
            DropColumn("dbo.Drivers", "ZipId");
            DropTable("dbo.ZIPs");
        }
    }
}
