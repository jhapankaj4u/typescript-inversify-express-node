"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const product_service_1 = require("./infrastructures/services/product.service");
const types_1 = __importDefault(require("./types"));
//import { ProductController, IProductController } from './controllers/product.controller';
let container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.default.ProductService).to(product_service_1.ProductService);
//# sourceMappingURL=container.js.map