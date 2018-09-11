using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AeroSceneryHub.Models
{
    public enum SurfaceType
    {
        [Display(Name = "Asphalt")]
        Asphalt = 1,

        [Display(Name = "Concrete")]
        Concrete = 2,

        [Display(Name = "Grass")]
        Grass = 3,

        [Display(Name = "Dirt")]
        Dirt = 4,

        [Display(Name = "Gravel")]
        Gravel = 5,

        [Display(Name = "DryLakeBed")]
        DryLakeBed = 12,

        [Display(Name = "Water")]
        Water = 13,

        [Display(Name = "SnowOrIce")]
        SnowOrIce = 14,

        [Display(Name = "Unknown")]
        Transparent = 15
    }

}
