using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace AeroSceneryHub.Models
{
    public class CultivationGridSquare
    {
        [Key]
        public long CultivationGridSquareId { get; set; }
        public string GridSquareName { get; set; }
        public double NorthLatitude { get; set; }
        public double SouthLatitude { get; set; }
        public double EastLongitude { get; set; }
        public double WestLongitude { get; set; }
    }
}
