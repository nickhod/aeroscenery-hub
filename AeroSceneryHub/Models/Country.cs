using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace AeroSceneryHub.Models
{
    public class Country
    {
        [Key]
        public long CountryId { get; set; }
        public string Name { get; set; }
    }
}
