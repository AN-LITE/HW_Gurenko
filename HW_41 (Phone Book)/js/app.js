'use strict';
import Controller from "./phonebook/Controller.js";
import View from "./phonebook/View.js";
import Model from "./phonebook/Model.js";

const app = new Controller(new View(), new Model());
app.start();

