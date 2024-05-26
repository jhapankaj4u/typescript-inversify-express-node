"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    static getControllerMethod(controller, method) {
        return new controller()[method]();
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map