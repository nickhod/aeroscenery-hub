using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AeroSceneryHub.Models
{
    public class Airport
    {
        [Key]
        public long AirportId { get; set; }

        [Column(TypeName = "VARCHAR(255)")]
        [StringLength(255)]
        public string Name { get; set; }

        [Column(TypeName = "VARCHAR(255)")]
        [StringLength(255)]
        public string Code { get; set; }

        [Column(TypeName = "VARCHAR(255)")]
        [StringLength(255)]
        public string ICAO { get; set; }

        [Column(TypeName = "VARCHAR(255)")]
        [StringLength(255)]
        public string IATA { get; set; }

        [Column(TypeName = "VARCHAR(255)")]
        [StringLength(255)]
        public string FAACode { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        [ForeignKey("Country")]
        public long? CountryId { get; set; }

        [ForeignKey("Region")]
        public long? RegionId { get; set; }

        [ForeignKey("City")]
        public long? CityId { get; set; }

        public bool IsHelipad { get; set; }

        public SurfaceType RunwaySurfaceType { get; set; }

        public bool HasPavement { get; set; }

        public int RunwayCount { get; set; }

        [Column(TypeName = "VARCHAR(255)")]
        [StringLength(255)]
        public string RegionCode { get; set; }

        public DateTime UpdatedOn { get; set; }

        public bool Hidden { get; set; }

        [ForeignKey("CheckedOutByUser")]
        public string CheckedOutByUserId { get; set; }

        public DateTime? CheckedOutOn { get; set; }

        public string CheckOutComment { get; set; }

        public bool XP3D { get; set; }

        public virtual City City { get; set; }
        public virtual Country Country { get; set; }
        public virtual Region Region { get; set; }
        public virtual IdentityUser CheckedOutByUser { get;set; }

    }
}
