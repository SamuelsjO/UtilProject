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
const BaseResponse_1 = __importDefault(require("../BaseResponse/BaseResponse"));
class BaseController extends BaseResponse_1.default {
    execute(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.executeImpl(req, res);
            }
            catch (error) {
                console.log(`[BaseController]: Uncaught controller error`);
                return this.respondError(res, error);
            }
        });
    }
}
exports.default = BaseController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlci9CYXNlQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLGdGQUF3RDtBQUV4RCxNQUE4QixjQUFlLFNBQVEsc0JBQVk7SUFHbEQsT0FBTyxDQUFDLEdBQVksRUFBRSxHQUFhOztZQUM5QyxJQUFJO2dCQUNGLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDbkM7WUFBQyxPQUFPLEtBQVUsRUFBRTtnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO2dCQUMzRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFYRCxpQ0FXQyJ9