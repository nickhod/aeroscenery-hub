using AeroSceneryHub.Models;
using AeroSceneryHub.ViewModels.Airports;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AeroSceneryHub.Common;


namespace AeroSceneryHub.ViewModels.Mappers
{
    public class AirportMapper
    {
        public AirportDetailsViewModel ToViewModel(Airport airport)
        {
            var viewModel = new AirportDetailsViewModel();
            viewModel.Code = airport.Code;
            viewModel.IATA = airport.IATA;
            viewModel.ICAO = airport.ICAO;
            viewModel.Name = airport.Name;
            //viewModel.City =  airport.City.Name;
            //viewModel.Region =airopr;
            //viewModel.Country = "United Kingdom";
            viewModel.Latitude = airport.Latitude;
            viewModel.Longitude = airport.Longitude;
            viewModel.UpdatedOn = DateTime.UtcNow;
            viewModel.CheckedOutByUserName = "JoeB";
            viewModel.CheckedOutOn = DateTime.UtcNow;
            viewModel.CheckOutComment = "Checked out for some work";
            viewModel.RunwaySurfaceType = airport.RunwaySurfaceType.GetEnumDisplayName();
            viewModel.RunwayCount = airport.RunwayCount;

            return viewModel;
        }
    }
}
