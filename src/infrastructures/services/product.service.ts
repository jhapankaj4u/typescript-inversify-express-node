import { injectable } from "inversify";
export interface IProduct {
    title: string;
    price: number;
  }

export interface IProductService{
    getProduct(): IProduct[];
}

@injectable()
export class ProductService implements IProductService {

    private proStorage: IProduct[] = [{
        title: 'Iphone',
        price: 300
      }, {
        title: 'Ipad',
        price: 400
      }];

      public getProduct(): IProduct[] {
        return this.proStorage;
      }
}    
