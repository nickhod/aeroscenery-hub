using System;
using System.Collections.Generic;
using System.Text;
using AeroSceneryHub.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AeroSceneryHub.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {

        }

        public DbSet<Airport> Airports { get; set; }
        public DbSet<AirportVersion> AirportVersions { get; set; }
        public DbSet<AirportVersionComment> AirportVersionComments { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Region> Regions { get; set; }
        public DbSet<CultivationGridSquare> CultivationGridSquares { get; set; }
        public DbSet<CultivationGridSquareVersion> CultivationGridSquareVersions { get; set; }
        public DbSet<CultivationGridSquareVersionComment> CultivationGridSquareVersionComments { get; set; }
    }
}
