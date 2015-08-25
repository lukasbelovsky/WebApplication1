namespace WebApplication1.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Init2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Items", "Brand", c => c.String());
            AddColumn("dbo.Items", "Type", c => c.String());
            DropColumn("dbo.Items", "Title");
            DropColumn("dbo.Items", "Description");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Items", "Description", c => c.String());
            AddColumn("dbo.Items", "Title", c => c.String());
            DropColumn("dbo.Items", "Type");
            DropColumn("dbo.Items", "Brand");
        }
    }
}
