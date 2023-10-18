# Node.js Form App Drifts- och Installationsguide

Denna guide beskriver hur du klonar, installerar och kör Node.js Form App.

## Förutsättningar

- Git (för att klona projektet)
- Node.js 18 LTS och npm. Om du inte har det kan du hämta det från [här](https://nodejs.org/).

## Installation

1. **Klona projektet**:
   ```bash
   git clone https://github.com/robert-alfwar/node-form-app.git
   cd node-form-app
   ```

2. **Installera nödvändiga paket**:
   ```bash
   npm install
   ```

## Driftsinstruktioner

1. **Starta servern**:
   ```bash
   npm start
   ```

   Servern kommer nu att starta på port 3000 som standard.

2. **Ändra serverport (valfritt)**:

   Om du behöver köra servern på en annan port kan du ändra detta genom att sätta `PORT`-miljövariabeln:

   ```bash
   PORT=4000 npm start
   ```

   Detta kommer att starta servern på port 4000 istället.

3. **Besök webbapplikationen**:

   Öppna en webbläsare och gå till `http://localhost:[PORT]`, där `[PORT]` är den port du valde (standard är 3000).

4. **Stoppa servern**:

   Tryck `CTRL + C` i terminalen där servern körs för att stoppa den.

## Manuell testning med Insomnia

Insomnia är ett verktyg som hjälper dig att testa API:er manuellt genom att göra HTTP-förfrågningar.

1. **Installera Insomnia**:

   Ladda ner och installera Insomnia från [här](https://insomnia.rest/download/).

2. **Konfigurera Insomnia för din tjänst**:

   - Öppna Insomnia.
   - Klicka på "+" bredvid filter, sedan "HTTP Request".
   - Namnge din begäran, till exempel "Test Form Submission".
   - Välj metod "POST".
   - Ange URL:en `http://localhost:[PORT]/api/message`, ersätt `[PORT]` med den port din server körs på (vanligtvis 3000).
   - Under "Body" välj "JSON" och ange de data du vill skicka i JSON-format.

3. **Skicka förfrågan**:

   Klicka på "Send" för att skicka förfrågan. Du bör få ett svar från servern.

## Läs mer

- **Express**: Express är ett minimalt och flexibelt Node.js-webbapplikationsramverk. För att lära dig mer, besök [Express officiella dokumentation](https://expressjs.com/).

- **Handlebars**: Handlebars är en populär mallmotor. För mer information, besök [Handlebars officiella webbplats](https://handlebarsjs.com/).

