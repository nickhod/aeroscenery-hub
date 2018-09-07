using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AeroSceneryHub.ViewModels.Airports
{
    public class AirportVersionCommentViewModel
    {
        public long AirportVersionCommentId { get; set; }
        public DateTime DateAdded { get; set; }
        public string Comment { get; set; }
    }
}
