namespace WebApplication1.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addDriver1 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Drivers", "DateOfBirth", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Drivers", "DateOfBirth", c => c.DateTime(nullable: false));
        }
    }
}
