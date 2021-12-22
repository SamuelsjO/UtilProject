"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppValidationError_1 = __importDefault(require("../../errors/AppValidationError"));
const BaseController_1 = __importDefault(require("../BaseController"));
class MultiformDataController extends BaseController_1.default {
    executeImpl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.respondCreated(res, { message: req.body.img });
            }
            catch (error) {
                if (error instanceof AppValidationError_1.default) {
                    return this.respondValidationError(res, error);
                }
                return this.respondError(res, error);
            }
        });
    }
}
exports.default = MultiformDataController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlmb3JtRGF0YUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlci9pbXBsZW1lbnRhdGlvbnMvTXVsdGlmb3JtRGF0YUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5RkFBaUU7QUFDakUsdUVBQStDO0FBRS9DLE1BQXFCLHVCQUF3QixTQUFRLHdCQUFjO0lBQ2pELFdBQVcsQ0FBQyxHQUFZLEVBQUUsR0FBdUM7O1lBQy9FLElBQUk7Z0JBQ0YsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7YUFDNUQ7WUFBQyxPQUFPLEtBQVUsRUFBRTtnQkFDbkIsSUFBSSxLQUFLLFlBQVksNEJBQWtCLEVBQUU7b0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDaEQ7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUM7S0FBQTtDQUNGO0FBWEQsMENBV0MifQ==