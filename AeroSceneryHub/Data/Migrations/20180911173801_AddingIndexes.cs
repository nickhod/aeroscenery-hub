using Microsoft.EntityFrameworkCore.Migrations;

namespace AeroSceneryHub.Data.Migrations
{
    public partial class AddingIndexes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex("IX_Airports_Code", "Airports", "Code", null, true);
            migrationBuilder.CreateIndex("IX_CultivationGridSquares_GridSquareName", "CultivationGridSquares", "GridSquareName", null, true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex("IX_Airports_Code");
            migrationBuilder.DropIndex("IX_CultivationGridSquares_GridSquareName");

        }

    }
}
