using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AeroSceneryHub.Models
{
    public class AirportWithVersion
    {
        public Airport Airport { get; set; }
        public AirportVersion AirportVersion { get; set; }
    }
}
