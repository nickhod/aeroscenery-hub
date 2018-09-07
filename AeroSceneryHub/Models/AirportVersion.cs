using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AeroSceneryHub.Models
{
    public class AirportVersion
    {
        [Key]
        public long AirportVersionId { get; set; }

        [ForeignKey("Airport")]
        public long AirportId { get; set; }

        [ForeignKey("User")]
        public long UserId { get; set; }
        public DateTime DateAdded { get; set; }
        public bool Is3D { get; set; }
        public int ModerationStatus { get; set; }
        public string DownloadLink { get; set; }
        public bool RecommendedVersion { get; set; }
    }
}
