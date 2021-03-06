﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace AeroSceneryHub.Models
{
    public class CultivationGridSquareVersion
    {
        [Key]
        public long CultivationGridSquareVersionId { get; set; }

        [ForeignKey("CultivationGridSquare")]
        public long CultivationGridSquareId { get; set; }

        [ForeignKey("User")]
        public string UserId { get; set; }

        public DateTime DateAdded { get; set; }

        public int ModerationStatus { get; set; }

        //public string DownloadLink { get; set; }

        public bool RecommendedVersion { get; set; }
        public virtual CultivationGridSquare CultivationGridSquare { get; set; }
        public virtual IdentityUser User { get; set; }

    }
}
