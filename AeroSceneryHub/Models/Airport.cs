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
        public string Name { get; set; }
        public string Code { get; set; }
        public string ICAO { get; set; }
        public string IATA { get; set; }
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
        public bool XPSceneryAvailable { get; set; }
        public bool AFSSceneryAvailable { get; set; }
        public bool XP3DSceneryAvailable { get; set; }
        public bool AFS3DSceneryAvailable { get; set; }
        public bool Hidden { get; set; }
        public DateTime UpdatedOn { get; set; }

        [ForeignKey("User")]
        public long CheckedOutByUserId { get; set; }
        public DateTime CheckedOutOn { get; set; }
        public string CheckOutComment { get; set; }
    }
}
