﻿using System;
using System.ComponentModel.DataAnnotations;
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
        public DateTime DateOfBirth { get; set; }
    }
}