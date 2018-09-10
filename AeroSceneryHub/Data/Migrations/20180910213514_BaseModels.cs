using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AeroSceneryHub.Data.Migrations
{
    public partial class BaseModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    CityId = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.CityId);
                });

            migrationBuilder.CreateTable(
                name: "Countries",
                columns: table => new
                {
                    CountryId = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Countries", x => x.CountryId);
                });

            migrationBuilder.CreateTable(
                name: "CultivationGridSquares",
                columns: table => new
                {
                    CultivationGridSquareId = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    GridSquareName = table.Column<string>(nullable: false),
                    NorthLatitude = table.Column<double>(nullable: false),
                    SouthLatitude = table.Column<double>(nullable: false),
                    EastLongitude = table.Column<double>(nullable: false),
                    WestLongitude = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CultivationGridSquares", x => x.CultivationGridSquareId);
                });

            migrationBuilder.CreateTable(
                name: "Regions",
                columns: table => new
                {
                    RegionId = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Regions", x => x.RegionId);
                });

            migrationBuilder.CreateTable(
                name: "CultivationGridSquareVersions",
                columns: table => new
                {
                    CultivationGridSquareVersionId = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    CultivationGridSquareId = table.Column<long>(nullable: false),
                    UserId = table.Column<string>(nullable: false),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    ModerationStatus = table.Column<int>(nullable: false),
                    RecommendedVersion = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CultivationGridSquareVersions", x => x.CultivationGridSquareVersionId);
                    table.ForeignKey(
                        name: "FK_CultivationGridSquareVersions_CultivationGridSquares_Cultiva~",
                        column: x => x.CultivationGridSquareId,
                        principalTable: "CultivationGridSquares",
                        principalColumn: "CultivationGridSquareId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CultivationGridSquareVersions_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Airports",
                columns: table => new
                {
                    AirportId = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Code = table.Column<string>(nullable: true),
                    ICAO = table.Column<string>(nullable: true),
                    IATA = table.Column<string>(nullable: true),
                    FAACode = table.Column<string>(nullable: true),
                    Latitude = table.Column<double>(nullable: false),
                    Longitude = table.Column<double>(nullable: false),
                    CountryId = table.Column<long>(nullable: true),
                    RegionId = table.Column<long>(nullable: true),
                    CityId = table.Column<long>(nullable: true),
                    IsHelipad = table.Column<bool>(nullable: false),
                    RunwaySurfaceType = table.Column<int>(nullable: false),
                    HasPavement = table.Column<bool>(nullable: false),
                    RunwayCount = table.Column<int>(nullable: false),
                    RegionCode = table.Column<string>(nullable: true),
                    UpdatedOn = table.Column<DateTime>(nullable: false),
                    Hidden = table.Column<bool>(nullable: false),
                    CheckedOutByUserId = table.Column<string>(nullable: true),
                    CheckedOutOn = table.Column<DateTime>(nullable: true),
                    CheckOutComment = table.Column<string>(nullable: true),
                    XP3D = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Airports", x => x.AirportId);
                    table.ForeignKey(
                        name: "FK_Airports_AspNetUsers_CheckedOutByUserId",
                        column: x => x.CheckedOutByUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Airports_Cities_CityId",
                        column: x => x.CityId,
                        principalTable: "Cities",
                        principalColumn: "CityId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Airports_Countries_CountryId",
                        column: x => x.CountryId,
                        principalTable: "Countries",
                        principalColumn: "CountryId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Airports_Regions_RegionId",
                        column: x => x.RegionId,
                        principalTable: "Regions",
                        principalColumn: "RegionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "CultivationGridSquareVersionComments",
                columns: table => new
                {
                    CultivationGridSquareVersionCommentId = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    CultivationGridSquareVersionId = table.Column<long>(nullable: false),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    Comment = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CultivationGridSquareVersionComments", x => x.CultivationGridSquareVersionCommentId);
                    table.ForeignKey(
                        name: "FK_CultivationGridSquareVersionComments_CultivationGridSquareVe~",
                        column: x => x.CultivationGridSquareVersionId,
                        principalTable: "CultivationGridSquareVersions",
                        principalColumn: "CultivationGridSquareVersionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AirportVersions",
                columns: table => new
                {
                    AirportVersionId = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    AirportId = table.Column<long>(nullable: false),
                    UserId = table.Column<string>(nullable: true),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    Is3D = table.Column<bool>(nullable: false),
                    ModerationStatus = table.Column<int>(nullable: false),
                    RecommendedVersion = table.Column<bool>(nullable: false),
                    OriginalDataUpdatedOn = table.Column<DateTime>(nullable: true),
                    Comment = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AirportVersions", x => x.AirportVersionId);
                    table.ForeignKey(
                        name: "FK_AirportVersions_Airports_AirportId",
                        column: x => x.AirportId,
                        principalTable: "Airports",
                        principalColumn: "AirportId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_AirportVersions_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AirportVersionComments",
                columns: table => new
                {
                    AirportVersionCommentId = table.Column<long>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    AirportVersionId = table.Column<long>(nullable: false),
                    DateAdded = table.Column<DateTime>(nullable: false),
                    Comment = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AirportVersionComments", x => x.AirportVersionCommentId);
                    table.ForeignKey(
                        name: "FK_AirportVersionComments_AirportVersions_AirportVersionId",
                        column: x => x.AirportVersionId,
                        principalTable: "AirportVersions",
                        principalColumn: "AirportVersionId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Airports_CheckedOutByUserId",
                table: "Airports",
                column: "CheckedOutByUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Airports_CityId",
                table: "Airports",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_Airports_CountryId",
                table: "Airports",
                column: "CountryId");

            migrationBuilder.CreateIndex(
                name: "IX_Airports_RegionId",
                table: "Airports",
                column: "RegionId");

            migrationBuilder.CreateIndex(
                name: "IX_AirportVersionComments_AirportVersionId",
                table: "AirportVersionComments",
                column: "AirportVersionId");

            migrationBuilder.CreateIndex(
                name: "IX_AirportVersions_AirportId",
                table: "AirportVersions",
                column: "AirportId");

            migrationBuilder.CreateIndex(
                name: "IX_AirportVersions_UserId",
                table: "AirportVersions",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_CultivationGridSquareVersionComments_CultivationGridSquareVe~",
                table: "CultivationGridSquareVersionComments",
                column: "CultivationGridSquareVersionId");

            migrationBuilder.CreateIndex(
                name: "IX_CultivationGridSquareVersions_CultivationGridSquareId",
                table: "CultivationGridSquareVersions",
                column: "CultivationGridSquareId");

            migrationBuilder.CreateIndex(
                name: "IX_CultivationGridSquareVersions_UserId",
                table: "CultivationGridSquareVersions",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AirportVersionComments");

            migrationBuilder.DropTable(
                name: "CultivationGridSquareVersionComments");

            migrationBuilder.DropTable(
                name: "AirportVersions");

            migrationBuilder.DropTable(
                name: "CultivationGridSquareVersions");

            migrationBuilder.DropTable(
                name: "Airports");

            migrationBuilder.DropTable(
                name: "CultivationGridSquares");

            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropTable(
                name: "Countries");

            migrationBuilder.DropTable(
                name: "Regions");
        }
    }
}
