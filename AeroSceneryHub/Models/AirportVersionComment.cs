using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AeroSceneryHub.Models
{
    public class AirportVersionComment
    {
        [Key]
        public long AirportVersionCommentId { get; set; }

        [ForeignKey("AirportVersion")]
        public long AirportVersionId { get; set; }
        public DateTime DateAdded { get; set; }

        [Column("Comment", TypeName="text")]
        public string Comment { get; set; }
        public virtual AirportVersion AirportVersion { get; set; }

    }
}
