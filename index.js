import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

const data = [{ "Servidor escuchando al puerto": PORT, URL: `http://localhost:${PORT}` }];
app.listen(PORT, () => {
    console.table(data);
});
