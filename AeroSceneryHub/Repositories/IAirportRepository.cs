using AeroSceneryHub.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AeroSceneryHub.Repositories
{
    public interface IAirportRepository
    {
        List<Airport> GetAllAirports();
        List<AirportWithVersion> GetAllAirportsWithRecommendedVersion();
        Airport GetAirportByCode(string code);

    }
}
