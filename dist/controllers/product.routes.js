"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const product_service_1 = require("../infrastructures/services/product.service");
const Router = express_1.default.Router();
let productCont = new product_controller_1.ProductController(new product_service_1.ProductService);
Router.get('/', productCont.get);
exports.default = Router;
//# sourceMappingURL=product.routes.js.map