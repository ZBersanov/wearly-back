const jsonServer = require("json-server");
const auth = require("json-server-auth");
const path = require("path");

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "../db.json"));
const middlewares = jsonServer.defaults();

app.db = router.db;

app.use(middlewares);
app.use(auth);
app.use(router);

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
