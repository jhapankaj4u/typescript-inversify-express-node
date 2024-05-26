import { IProduct, ProductService } from "../infrastructures/services/product.service";
import TYPES from "../types";
import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { controller, httpGet } from "inversify-express-utils";

@controller('/product')
export  class ProductController{
       
    constructor(@inject(TYPES.ProductService) private productService : ProductService) {}

    @httpGet('/')
    get(): IProduct[]{
        return this.productService.getProduct()
    }
    
}