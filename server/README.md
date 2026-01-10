# DMToolkit Server

The ASP.NET Core backend to this project

## Setup

Important to note that at least 3 user-secrets need setup for this portion to work
```bash
dotnet user-secrets init
dotnet user-secrets set "Key" "Your32CharacterKeyHere"
dotnet user-secrets set "Issuer" "Hostname/Url"
dotnet user-secrets set "Audience" "NoIdeaHowImportantThisIsSorry"
```