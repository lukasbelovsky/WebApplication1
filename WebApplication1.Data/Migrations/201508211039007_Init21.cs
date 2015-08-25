namespace WebApplication1.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Init21 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Items", "Brand", c => c.String(nullable: false));
            AlterColumn("dbo.Items", "Type", c => c.String(maxLength: 20));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Items", "Type", c => c.String());
            AlterColumn("dbo.Items", "Brand", c => c.String());
        }
    }
}
