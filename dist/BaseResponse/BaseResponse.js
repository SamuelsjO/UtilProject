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
const AppError_1 = __importDefault(require("../errors/AppError"));
class BaseResponse {
    respondSuccess(res, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.status(200).json(payload);
        });
    }
    respondCreated(res, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.status(201).json(payload);
        });
    }
    respondForbiden(res, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.status(403).json(payload);
        });
    }
    respondUnAuthrorized(res, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.status(401).json(payload);
        });
    }
    respondError(res, err) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            console.log(err);
            const status = (_a = err.statusCode) !== null && _a !== void 0 ? _a : 500;
            if (err instanceof AppError_1.default) {
                return res.status(status).json({ success: false, message: err.message });
            }
            return res.status(status).json({ success: false, errors: err.errors });
        });
    }
    respondValidationError(res, err) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: err.errors,
            });
        });
    }
}
exports.default = BaseResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Jhc2VSZXNwb25zZS9CYXNlUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrRUFBMEM7QUFHMUMsTUFBcUIsWUFBWTtJQUNsQixjQUFjLENBQUMsR0FBYSxFQUFFLE9BQTRCOztZQUNyRSxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUVZLGNBQWMsQ0FBQyxHQUFhLEVBQUUsT0FBNEI7O1lBQ3JFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBRVksZUFBZSxDQUFDLEdBQWEsRUFBRSxPQUE0Qjs7WUFDdEUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQUE7SUFFWSxvQkFBb0IsQ0FBQyxHQUFhLEVBQUUsT0FBNEI7O1lBQzNFLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLEdBQWEsRUFBRSxHQUFrQzs7O1lBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsTUFBTSxNQUFNLEdBQUcsTUFBQSxHQUFHLENBQUMsVUFBVSxtQ0FBSSxHQUFHLENBQUM7WUFFckMsSUFBSSxHQUFHLFlBQVksa0JBQVEsRUFBRTtnQkFDM0IsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO2FBQzFFO1lBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDOztLQUN4RTtJQUVZLHNCQUFzQixDQUFDLEdBQWEsRUFBRSxHQUF1Qjs7WUFDeEUsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDMUIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO2FBQ25CLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtDQUNGO0FBbkNELCtCQW1DQyJ9