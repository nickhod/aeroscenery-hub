﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AeroSceneryHub.Controllers
{
    public class CultivationGridSquaresController : Controller
    {
        [Route("cultivation")]
        public IActionResult Index()
        {
            return View();
        }
    }
}