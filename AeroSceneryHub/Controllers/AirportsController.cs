﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AeroSceneryHub.ViewModels.Airports;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AeroSceneryHub.Controllers
{
    public class AirportsController : Controller
    {
        // GET: Airports
        public ActionResult Index()
        {
            return View();
        }

        // GET: Airports/EGFF
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