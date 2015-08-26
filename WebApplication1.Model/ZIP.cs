using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1.Model
{
    [DataContract(IsReference = true)]
    public class ZIP
    {
        [Key]
        [DataMember]
        public Guid Id { get; set; }

        [DataMember]
        [Required]
        public string Code { get; set; }

        [DataMember]
        [InverseProperty("Zip")]
        public virtual ICollection<Driver> Drivers { get; set; }
    }
}
