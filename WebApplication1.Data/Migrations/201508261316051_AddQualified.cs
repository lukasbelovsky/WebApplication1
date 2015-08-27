namespace WebApplication1.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddQualified : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Drivers", "Qualified", c => c.Boolean(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Drivers", "Qualified");
        }
    }
}
