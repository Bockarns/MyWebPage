# MyWebPage

En personlig webbplats byggd med **ASP.NET Core Razor Pages**.  
Den här sidan är ett portfolio-projekt där jag visar vem jag är, vad jag gjort samt exempel på webbutveckling jag har gjort.

⚠️ Notera:
Denna version är backend-kod (Razor Pages), och är inte hostad som en statisk sida.  
För att se sidan som den var tänkt att användas, måste projektet köras lokalt.  

## 📦 Funktioner

- Sidor byggda med Razor (.cshtml)
- Enkla layout-sidor
- Responsiv design (CSS + JavaScript)
- Lärandemål: Razor Pages, C#, .NET

## 🚀 Komma igång

Följ dessa steg för att köra sidan lokalt på din dator:

### ✅ Förutsättningar

Du behöver ha följande installerat:

- [.NET 9 SDK](https://dotnet.microsoft.com)
- Git

### 👇 Klona repot

```bash
git clone https://github.com/Bockarns/MyWebPage.git
cd MyWebPage
🧰 Bygg och kör
dotnet restore
dotnet build
dotnet run

Projektet startar en lokal webbserver (vanligtvis https://localhost:5001/).

🧠 Struktur

MyWebPage/ – Den huvudsakliga .NET-webbappen

Pages/ – .cshtml-sidor och PageModels

wwwroot/ – CSS, JavaScript och andra statiska filer

📌 Deployment

Detta projekt är inte hostad live just nu.

📚 Lärdomar

Detta projekt har hjälpt mig att:

Förstå Razor Pages-modellen i ASP.NET

Få koll på routing och layout i .NET

Strukturera ett portfolio-projekt
