using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace AeroSceneryHub.Models
{
    public class AirportVersion
    {
        [Key]
        public long AirportVersionId { get; set; }

        [ForeignKey("Airport")]
        public long AirportId { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }

        public DateTime DateAdded { get; set; }

        public bool Is3D { get; set; }

        public int ModerationStatus { get; set; }

        //public string DownloadLink { get; set; }

        public bool RecommendedVersion { get; set; }
        public DateTime? OriginalDataUpdatedOn { get; set; }

        [Column("Comment", TypeName = "text")]
        public string ReleaseNotes { get; set; }

        public virtual Airport Airport { get; set; }
        public virtual IdentityUser User { get; set; }

    }
}
