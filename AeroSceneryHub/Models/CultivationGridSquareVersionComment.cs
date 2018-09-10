using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AeroSceneryHub.Models
{
    public class CultivationGridSquareVersionComment
    {
        [Key]
        public long CultivationGridSquareVersionCommentId { get; set; }

        [ForeignKey("CultivationGridSquareVersion")]
        public long CultivationGridSquareVersionId { get; set; }
        public DateTime DateAdded { get; set; }

        [Column("Comment", TypeName = "text")]
        public string Comment { get; set; }
        public virtual CultivationGridSquareVersion CultivationGridSquareVersion { get; set; }
    }
}
