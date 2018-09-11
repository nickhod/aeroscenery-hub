using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AeroSceneryHub.Models
{
    public class CultivationGridSquare
    {
        [Key]
        public long CultivationGridSquareId { get; set; }

        [Column(TypeName = "VARCHAR(255)")]
        [StringLength(255)]
        public string GridSquareName { get; set; }
        public double NorthLatitude { get; set; }
        public double SouthLatitude { get; set; }
        public double EastLongitude { get; set; }
        public double WestLongitude { get; set; }
    }
}
