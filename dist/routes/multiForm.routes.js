"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MultiformDataController_1 = __importDefault(require("../controller/implementations/MultiformDataController"));
const multerMidleware_1 = require("../middlewares/multerMidleware");
const multerMiddleware = new multerMidleware_1.MulterMiddleware();
const multiFormRouter = (0, express_1.Router)();
const multiformDataController = new MultiformDataController_1.default();
multiFormRouter.post('/img', (req, res, next) => multerMiddleware.execute(req, res, next), (req, res) => multiformDataController.execute(req, res));
exports.default = multiFormRouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlGb3JtLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvbXVsdGlGb3JtLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUFvRDtBQUdwRCxvSEFBNEY7QUFDNUYsb0VBQWtFO0FBRWxFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxrQ0FBZ0IsRUFBRSxDQUFDO0FBRWhELE1BQU0sZUFBZSxHQUFHLElBQUEsZ0JBQU0sR0FBRSxDQUFDO0FBRWpDLE1BQU0sdUJBQXVCLEdBQW1CLElBQUksaUNBQXVCLEVBQUUsQ0FBQztBQUc5RSxlQUFlLENBQUMsSUFBSSxDQUNsQixNQUFNLEVBQ04sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQzVELENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxFQUFFLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FDM0UsQ0FBQztBQUVGLGtCQUFlLGVBQWUsQ0FBQyJ9