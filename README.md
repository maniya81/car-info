# Car Info Web App

> **A simple way to manage car makes, models, features, and photos. Built for everyone!**

---

## 🚀 Quick Links

- **Live Homepage:** [carinfo.azurewebsites.net](https://carinfo.azurewebsites.net/)
- **Backend API Docs (Swagger):** [Swagger UI](https://car-info.azurewebsites.net/swagger/index.html)
- **Main Source Code:** [GitHub Repo](https://github.com/maniya81/car-info)
- **Frontend (Angular):** [ClientApp Source](https://github.com/maniya81/car-info/tree/main/ClientApp)
- **Backend (Web API):** [WebApi Source](https://github.com/maniya81/car-info/tree/main/WebApi)
- **CI/CD Build Pipeline:** [Azure DevOps Build](https://dev.azure.com/maniyasagar26/Sigma/_build)
- **CI/CD Release Pipeline:** [Azure DevOps Release](https://dev.azure.com/maniyasagar26/Sigma/_release?_a=releases&view=mine&definitionId=4)

---

## 📝 What Can You Do Here?

- View, add, edit, and delete vehicles, makes, models, and features
- Upload and browse car photos
- Search, filter, and sort vehicles easily
- See all changes instantly—no page reloads
- Explore the backend API with interactive Swagger docs

---

## 🛠️ Tech Stack (For Developers)

- **Frontend:** Angular (TypeScript)
- **Backend:** ASP.NET Core Web API (C#)
- **Database:** SQL Server with Entity Framework Core
- **Deployment:** Azure App Service
- **CI/CD:** Azure DevOps Pipelines (automated build & release)

---

## 💻 How to Set Up Locally

### Prerequisites

- [.NET 7 SDK or later](https://dotnet.microsoft.com/download)
- [Node.js (LTS)](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [SQL Server Express LocalDB](https://learn.microsoft.com/sql/database-engine/configure-windows/sql-server-express-localdb) or any SQL Server
- VS Code or Visual Studio

### 1. Clone the Project

```powershell
git clone https://github.com/maniya81/car-info.git
cd car-info
```

### 2. Backend Setup (WebApi)

```powershell
cd WebApi
dotnet restore
# Update ConnectionStrings in appsettings.Development.json if needed
dotnet ef database update
dotnet run
```

- The API runs at `https://localhost:5001` or `http://localhost:5000`

### 3. Frontend Setup (ClientApp)

```powershell
cd ../ClientApp
npm install
ng serve
```

- The app runs at `http://localhost:4200`

---

## 🔗 API Endpoints (Swagger)

- **Docs:** [Swagger UI](https://car-info.azurewebsites.net/swagger/index.html)
- Example endpoints:
  - `GET /api/vehicles` — List vehicles
  - `POST /api/vehicles` — Add a vehicle
  - `GET /api/makes` — List car makes
  - `GET /api/features` — List features
  - `POST /api/vehicles/{vehicleId}/photos` — Upload a photo

---

## ⚙️ CI/CD Pipeline

- Automated build and deployment with Azure DevOps
- See [azure-pipelines.yml](azure-pipelines.yml) for details
- Pipelines run on every commit to `main`

---

## 👤 Author & Contact

- **Sagar Maniya**
  - [GitHub](https://github.com/maniya81)
  - [LinkedIn](https://www.linkedin.com/in/maniyasagar/)

---

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.
