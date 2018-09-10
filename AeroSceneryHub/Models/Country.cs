using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AeroSceneryHub.Models
{
    public class Country
    {
        [Key]
        public long CountryId { get; set; }

        [Column(TypeName = "VARCHAR(255)")]
        [StringLength(255)]
        public string Name { get; set; }
    }
}
