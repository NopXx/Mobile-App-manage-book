import app from "./app";

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on PORT: ${process.env.PORT}`);
});
