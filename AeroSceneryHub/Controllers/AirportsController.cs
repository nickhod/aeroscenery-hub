using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AeroSceneryHub.Common;
using AeroSceneryHub.ViewModels.Airports;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AeroSceneryHub.Controllers
{
    public class AirportsController : Controller
    {
        [Route("")]
        public ActionResult Index()
        {
            return View();
        }

        [Route("airports/{code}")]
        public ActionResult Details(string code)
        {
            var viewModel = new AirportDetailsViewModel();
            viewModel.Code = "EGFF";
            viewModel.IATA = "CWL";
            viewModel.ICAO = "EGFF";
            viewModel.Name = "Cardiff";
            viewModel.City = "Cardiff";
            viewModel.Region = "Wales";
            viewModel.Country = "United Kingdom";
            viewModel.Latitude = 51.4;
            viewModel.Longitude = -3.34;
            viewModel.XPSceneryAvailable = true;
            viewModel.AFSSceneryAvailable= false;
            viewModel.XP3DSceneryAvailable= true;
            viewModel.AFS3DSceneryAvailable = false;
            viewModel.UpdatedOn = DateTime.UtcNow;
            viewModel.CheckedOutByUserName = "JoeB";
            viewModel.CheckedOutOn = DateTime.UtcNow;
            viewModel.CheckOutComment = "Checked out for some work";

            var airportVersion = new AirportVersionViewModel();
            airportVersion.AirportVersionId = 1;
            airportVersion.DateAdded = DateTime.UtcNow.AddDays(-30);
            airportVersion.DownloadLink = "";
            airportVersion.Is3D = true;
            airportVersion.ModerationStatus = ModerationStatus.PassedModeration;
            airportVersion.RecommendedVersion = false;
            airportVersion.ReleaseNotes = "Test 123";
            airportVersion.UserName = "Nick H";
            airportVersion.UserId = 1;

            var airportVersion2 = new AirportVersionViewModel();
            airportVersion2.AirportVersionId = 2;
            airportVersion2.DateAdded = DateTime.UtcNow.AddDays(-20);
            airportVersion2.DownloadLink = "";
            airportVersion2.Is3D = true;
            airportVersion2.ModerationStatus = ModerationStatus.PassedModeration;
            airportVersion2.RecommendedVersion = false;
            airportVersion2.ReleaseNotes = "Test 123";
            airportVersion2.UserName = "Nick H";
            airportVersion2.UserId = 1;

            var airportVersion3 = new AirportVersionViewModel();
            airportVersion3.AirportVersionId = 2;
            airportVersion3.DateAdded = DateTime.UtcNow;
            airportVersion3.DownloadLink = "";
            airportVersion3.Is3D = true;
            airportVersion3.ModerationStatus = ModerationStatus.PassedModeration;
            airportVersion3.RecommendedVersion = true;
            airportVersion3.ReleaseNotes = "Test 123";
            airportVersion3.UserName = "Nick H";
            airportVersion3.UserId = 1;

            viewModel.AirportVersions.Add(airportVersion);
            viewModel.AirportVersions.Add(airportVersion2);
            viewModel.AirportVersions.Add(airportVersion3);

            return View(viewModel);
        }

        //// GET: Airports/Create
        //public ActionResult Create()
        //{
        //    return View();
        //}

        //// POST: Airports/Create
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Create(IFormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add insert logic here

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: Airports/Edit/5
        //public ActionResult Edit(int id)
        //{
        //    return View();
        //}

        //// POST: Airports/Edit/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Edit(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add update logic here

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}

        //// GET: Airports/Delete/5
        //public ActionResult Delete(int id)
        //{
        //    return View();
        //}

        //// POST: Airports/Delete/5
        //[HttpPost]
        //[ValidateAntiForgeryToken]
        //public ActionResult Delete(int id, IFormCollection collection)
        //{
        //    try
        //    {
        //        // TODO: Add delete logic here

        //        return RedirectToAction(nameof(Index));
        //    }
        //    catch
        //    {
        //        return View();
        //    }
        //}
    }
}