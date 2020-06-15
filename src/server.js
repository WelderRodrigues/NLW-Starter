const express = require("express");
const nunjucks = require("nunjucks");
const database = require("./database/db.js");

const server = express();

server.use(express.static("public"));

server.use(express.urlencoded({ extended: true }));

nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

server.get("/", (request, response) => {
  return response.render("index.html");
});

server.get("/create-point", (request, response) => {
  return response.render("create-point.html");
});

server.post("/create-point", (request, response) => {
  const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,? );
`;
  const values = [
    request.body.image,
    request.body.name,
    request.body.address,
    request.body.address2,
    request.body.state,
    request.body.city,
    request.body.items
  ];

  function afterInsertData(error) {
    if (error) {
      return console.log(error);
    }
    console.log("Cadastrado com sucesso");
    console.log(this);

    return response.send("Foi");
  }

  database.run(query, values, afterInsertData);
});

server.get("/search", (request, response) => {
  database.all(`SELECT * FROM places`, (error, rows) => {
    if (error) {
      return console.log(error);
    }

    const total = rows.length;

    return response.render("search-results.html", {
      places: rows,
      total: total,
    });
  });
});

server.listen(3000);
