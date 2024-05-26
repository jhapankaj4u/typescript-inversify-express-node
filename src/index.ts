import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { appConfig } from "./config"
import { container } from './container';
import * as bodyParser from 'body-parser';
//import  Router from "./controllers/product.routes"
import "./controllers/product.controller"

let server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(bodyParser.urlencoded({
      extended: true
    }));
    app.use(bodyParser.json());
  });

let serverInstance = server.build();
serverInstance.listen(appConfig.getConfigProvider().server.port!);

console.log('Server started on port  ' + appConfig.getConfigProvider().server.port! + '  )');