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
                if (req.files) {
                    const clinicalEvolution = "ClinicalEvolution: " + req.body.clinicalEvolution;
                    const labReportResult = "LabResportResult: " + req.body.labReportResult;
                    const imageResult = "ImageResult: " + req.body.imageResult;
                    return this.respondCreated(res, {
                        message: [clinicalEvolution, labReportResult, imageResult],
                    });
                }
                return this.respondCreated(res, { message: "Not exist files" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlmb3JtRGF0YUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29udHJvbGxlci9pbXBsZW1lbnRhdGlvbnMvTXVsdGlmb3JtRGF0YUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5RkFBaUU7QUFDakUsdUVBQStDO0FBRS9DLE1BQXFCLHVCQUF3QixTQUFRLHdCQUFjO0lBQ2pELFdBQVcsQ0FDekIsR0FBWSxFQUNaLEdBQXVDOztZQUV2QyxJQUFJO2dCQUNGLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtvQkFDYixNQUFNLGlCQUFpQixHQUNyQixxQkFBcUIsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO29CQUNyRCxNQUFNLGVBQWUsR0FBRyxvQkFBb0IsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztvQkFDeEUsTUFBTSxXQUFXLEdBQUcsZUFBZSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO29CQUUzRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFO3dCQUM5QixPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDO3FCQUMzRCxDQUFDLENBQUM7aUJBQ0o7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7YUFDakU7WUFBQyxPQUFPLEtBQVUsRUFBRTtnQkFDbkIsSUFBSSxLQUFLLFlBQVksNEJBQWtCLEVBQUU7b0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDaEQ7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUN0QztRQUNILENBQUM7S0FBQTtDQUNGO0FBeEJELDBDQXdCQyJ9