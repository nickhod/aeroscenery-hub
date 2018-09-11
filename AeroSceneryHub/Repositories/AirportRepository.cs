using AeroSceneryHub.Data;
using AeroSceneryHub.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AeroSceneryHub.Repositories
{
    public class AirportRepository : IAirportRepository
    {
        private readonly ApplicationDbContext context;

        public AirportRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public List<Airport> GetAllAirports()
        {
            var airports = context.Airports.ToList();
            return airports;
        }

        public List<AirportWithVersion> GetAllAirportsWithRecommendedVersion()
        {
            var list = from a in context.Airports
                       join av in context.AirportVersions.DefaultIfEmpty() 
                           on new { x = a.AirportId, y = true } equals new { x = av.AirportId, y = av.RecommendedVersion } into Join1
                       from j in Join1.DefaultIfEmpty()
                       select new{ a, j };

            List<AirportWithVersion> airportsWithVersion = new List<AirportWithVersion>();

            foreach (var item in list.ToList())
            {
                AirportWithVersion airportWithVersion = new AirportWithVersion();
                airportWithVersion.Airport = item.a;

                if (item.j != null)
                {
                    airportWithVersion.AirportVersion = item.j;
                }

                airportsWithVersion.Add(airportWithVersion);
            }

            return airportsWithVersion;
        }

        
        public Airport GetAirportByCode(string code)
        {
            var airport = context.Airports.Where(x => x.Code == code).FirstOrDefault();
            return airport;
        }
    }
}
