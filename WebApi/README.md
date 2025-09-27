# car-info

Car Info project provides information related car make and model no with front end Angular and as backend Asp .net core web api

## Runtime configuration: SQL connection string

To keep secrets out of source control, the SQL connection string is not stored in `appsettings.json`. Instead, provide it at runtime using one of the following methods. The application expects a connection string named `CarInfoConnection`.

- Local development (recommended): .NET User Secrets

  1.  Ensure the WebApi project is the startup project.
  2.  From the WebApi project folder, set the secret:
      - Key: `ConnectionStrings:CarInfoConnection`
      - Value: `<your full SQL connection string>`
  3.  Alternatively, set an environment variable `ConnectionStrings__CarInfoConnection`.

- Azure App Service:

  - In Configuration, add a Connection string entry:
    - Name: `CarInfoConnection`
    - Value: `<your full SQL connection string>`
    - Type: `SQLAzure`
  - Or add an Application setting:
    - Name: `ConnectionStrings:CarInfoConnection`
    - Value: `<your full SQL connection string>`

- Azure Key Vault (optional, more secure):
  - Store the connection string as a secret, then reference it from App Service settings using a Key Vault reference in the `CarInfoConnection` connection string or app setting.

If the connection string is missing at startup, the API will fail fast with a clear error to avoid running against an unintended database.
