# Car Info Web API

# Car Info Web API

**API Endpoint:**  
https://car-info.azurewebsites.net/index.html

**Swagger/OpenAPI UI:**  
https://car-info.azurewebsites.net/swagger/index.html

---

## Azure Connection String Injection

To inject your SQL Server connection string securely in Azure App Service:

1. Go to your Web App in the Azure Portal.
2. Navigate to **Settings > Environment variables > Connection strings**.
3. Add a new connection string:
   - **Name:** `CarInfoConnection`
   - **Value:** `<your full SQL Server connection string>`
   - **Type:** `SQLServer`
4. The application will automatically use this connection string in production.

---

## Database Schema Overview

**Main Tables:**

- `Vehicles`: Stores vehicle details (make, model, contact info, registration, features, photos)
- `Makes`: Car manufacturers
- `Models`: Car models linked to makes
- `Features`: Available car features
- `Photos`: Uploaded vehicle photos
- `VehicleFeatures`: Many-to-many relationship between vehicles and features

---

## Features

- CRUD operations for vehicles, makes, models, and features
- Photo upload and retrieval for vehicles
- Querying and filtering vehicles by make, model, and features
- Pagination and sorting support for vehicle listings
- Swagger/OpenAPI documentation for easy API exploration
- CORS support for integration with front-end applications (e.g., Angular)
- Entity Framework Core with SQL Server (local or Azure)

## Project Structure

- `Controllers/` - API endpoints for vehicles, makes, features, and photos
- `Core/Models/` - Entity models for vehicles, makes, models, features, photos, and queries
- `Persistence/` - Entity Framework DbContext and repository implementations
- `Mapping/` - AutoMapper profiles for DTOs and entities
- `Extensions/` - Query extensions and interfaces
- `Migrations/` - Entity Framework database migrations
- `appsettings.json` / `appsettings.Development.json` - Configuration files for connection strings and settings

## Getting Started

### Prerequisites

- .NET 7 SDK or later
- SQL Server (local or Azure)
- Visual Studio or VS Code

### Configuration

#### Connection Strings

The API supports two connection strings:

- `LocalDbConnection`: For local development using SQL Server Express or LocalDB
- `AzureCarInfoDb`: For production or cloud environments (e.g., Azure SQL, AWS RDS)

Configure these in `appsettings.json` and/or `appsettings.Development.json`:

```json
"ConnectionStrings": {
   "LocalDbConnection": "Data Source=DESKTOP-B1B95M6\\SQLEXPRESS;Initial Catalog=CarInfoDb;Persist Security Info=True;User ID=sagar;Password=admin@123",
   "AzureCarInfoDb": "Server=tcp:sigma99.database.windows.net,1433;Initial Catalog=Sigma;Persist Security Info=False;User ID=Admin9;Password=Admin@123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"
}
```

- For local development, the API uses `LocalDbConnection`.
- For production, it uses `AzureCarInfoDb` or a secret-shared connection string (User Secrets, Environment Variables, Azure App Settings).

#### Photo Settings

Configure allowed file types and max upload size in `PhotoSettings`:

```json
"PhotoSettings": {
   "MaxBytes": 10485760,
   "AcceptedFileTypes": [".jpg", ".jpeg", ".png"]
}
```

### Running the API

1. Restore NuGet packages:  
   `dotnet restore`
2. Build the project:  
   `dotnet build`
3. Run the API (with hot reload):  
   `dotnet watch run`
4. Access Swagger UI at:  
   `http://localhost:5000` (or your configured port)

### API Endpoints

- `GET /api/vehicles` - List vehicles
- `POST /api/vehicles` - Create a vehicle
- `GET /api/makes` - List car makes
- `GET /api/features` - List car features
- `GET /api/vehicles/{vehicleId}/photos` - Get photos for a vehicle
- `POST /api/vehicles/{vehicleId}/photos` - Upload a photo for a vehicle

### Security

- Connection strings and secrets should not be committed to source control.
- Use User Secrets or environment variables for sensitive data in development.
- For production, use Azure App Settings or Key Vault.

### Technologies Used

- ASP.NET Core 7
- Entity Framework Core
- AutoMapper
- Swagger (Swashbuckle)
- SQL Server (LocalDB, Azure SQL, AWS RDS)

---
