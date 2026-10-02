const fs = require("fs");
const path = require("path");

const distFolder = path.join(__dirname, "dist");

if (!fs.existsSync(distFolder)) {
  fs.mkdirSync(distFolder);
}

const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>App Web - CI</title>
</head>
<body>
  <h1>Mi proyecto Node.js funciona</h1>
  <p>Build generado correctamente.</p>
</body>
</html>`;

fs.writeFileSync(
  path.join(distFolder, "index.html"),
  html
);

console.log("Build completado correctamente.");