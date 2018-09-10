using AeroSceneryHub.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AeroSceneryHub.ViewModels.Airports
{
    public class AirportVersionViewModel
    {
        public AirportVersionViewModel()
        {
            //this.
        }

        public long AirportVersionId { get; set; }
        public string UserName { get; set; }
        public long UserId { get; set; }
        public DateTime DateAdded { get; set; }
        public bool Is3D { get; set; }
        public ModerationStatus ModerationStatus { get; set; }
        public string DownloadLink { get; set; }
        public bool RecommendedVersion { get; set; }
        public string ReleaseNotes { get; set; }
    }
}
