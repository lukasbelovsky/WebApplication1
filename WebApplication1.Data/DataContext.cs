using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApplication1.Model;

namespace WebApplication1.Data
{
    public class DataContext : DbContext
    {
        public DataContext()
            :base("Db1")
        {
        }

        public DbSet<Item> Items { get; set; }
        public DbSet<Driver> Drivers { get; set; }
        public DbSet<ZIP> Zips { get; set; }
    }
}
