FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["Apibackend/Apibackend.csproj", "Apibackend/"]
RUN dotnet restore "Apibackend/Apibackend.csproj"
COPY . .
WORKDIR "/src/Apibackend"
RUN dotnet build "Apibackend.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Apibackend.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Apibackend.dll"]
