using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace AeroSceneryHub.Models
{
    public class City
    {
        [Key]
        public long CityId { get; set; }
        public string Name { get; set; }
    }
}
