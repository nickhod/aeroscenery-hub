using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AeroSceneryHub.ViewModels.Airports
{
    public class AirportDetailsViewModel
    {
        public AirportDetailsViewModel()
        {
            this.AirportVersions = new List<AirportVersionViewModel>();
        }

        public long AirportId { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string ICAO { get; set; }
        public string IATA { get; set; }
        public string FAACode { get; set; }
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Country { get; set; }
        public string Region { get; set; }
        public string City { get; set; }
        public bool IsHelipad { get; set; }
        public bool XPSceneryAvailable { get; set; }
        public bool AFSSceneryAvailable { get; set; }
        public bool XP3DSceneryAvailable { get; set; }
        public bool AFS3DSceneryAvailable { get; set; }
        public DateTime UpdatedOn { get; set; }
        public string CheckedOutByUserName { get; set; }
        public DateTime CheckedOutOn { get; set; }
        public string CheckOutComment { get; set; }
        public IList<AirportVersionViewModel> AirportVersions { get; set; }
    }
}
