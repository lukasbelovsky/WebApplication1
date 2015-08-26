using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.Serialization;

namespace WebApplication1.Model
{
    [DataContract(IsReference = true)]
    public class Driver
    {
        [Key]
        [DataMember]
        public Guid Id { get; set; }

        [DataMember]
        [Required]
        public string FirstName { get; set; }

        [DataMember]
        [Required]
        public string LastName { get; set; }

        [DataMember]
        [StringLength(20)]
        public string City { get; set; }

        [DataMember]
        [Required]
        public string DateOfBirth { get; set; }

        [DataMember]
        public Guid? ZipId { get; set; }

        [DataMember]
        [ForeignKey("ZipId")]
        public ZIP Zip { get; set; }
    }
}
