using System;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;

namespace WebApplication1.Model
{
    [DataContract(IsReference = true)]
    public class Item
    {
        [Key]
        [DataMember]
        public Guid Id { get; set; }

        [DataMember]
        [Required]
        public string Brand { get; set; }

        [DataMember]
        [StringLength(20)]
        public string Type { get; set; }
    }
}
