using Apibackend;
using DAL;
using EnityFrameworkDAL;
using EnityFrameworkDAL.Handlers;
using EnityFrameworkDAL.interfaces;
using Logic;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApi(builder.Configuration.GetSection("AzureAdB2C"));

builder.Services.AddDbContext<DatabaseContext>(options =>
{
    options.UseMySql("server=localhost; database=songlibary; user=root; password=", ServerVersion.AutoDetect("server=localhost; database=songlibary; user=root; password="));
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ISongHandler, SongHandler>();
builder.Services.AddScoped<ISongLogicHandler, SongLogic>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    
}

app.UseCors(origins => origins
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());   
app.UseSwagger();
app.UseSwaggerUI();
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();