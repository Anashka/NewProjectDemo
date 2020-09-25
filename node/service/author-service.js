const author = require("../entites/author");
const Authorrepo = require("../controller/author-repository");
const mongoose = require("mongoose");
const express = require("express");
const routes = express.Router();

let authorrepo = new Authorrepo();

function addauthor(req, res) {
  console.log(req.body);
  var authorlist = new author({
    id: req.body.id,
    name: req.body.name,
    biography: req.body.biography,
    dateofbirth: req.body.dateofbirth,
    email: req.body.email,
    listofbooks: req.body.listofbooks,
  });
  console.log(authorlist);
  authorrepo
    .Add(authorlist)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "succesfully added",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function findAll(req, res) {
  authorrepo
    .getAll()
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function findbyId(req, res) {
  id = req.params.id;
  //console.log("check", id);
  authorrepo
    .getById(id)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function findByBook(req, res) {
  name = req.params.name;
  console.log("book", name);
  authorrepo
    .getByBook(name)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function updateauthor(req, res) {
  //console.log("req", req);
  var updatedlist = {
    id: req.params.id,
    name: req.body.name,
    biography: req.body.biography,
    dateofbirth: req.body.dateofbirth,
    email: req.body.email,
    listofbooks: req.body.listofbooks,
  };
  authorrepo
    .update(updatedlist)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
function removeauthor(req, res) {
  id = req.params.id;
  console.log("remove author", id);
  authorrepo
    .remove(id)
    .then((output) => {
      console.log(output);
      res.status(200).json({
        message: "the data from the database ",
        result: output,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        message: "Error.....!",
        error: err,
      });
    });
}
routes.get("/author/findall", findAll);
routes.get("/author/:id", findbyId);
routes.get("/author/findbook/:name", findByBook);
routes.put("/author/updateauthor/:id", updateauthor);
routes.post("/author/addauthor", addauthor);
routes.delete("/author/removeauthor/:id", removeauthor);

module.exports = routes;
