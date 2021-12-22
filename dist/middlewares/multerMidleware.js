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
exports.MulterMiddleware = void 0;
const mime_1 = __importDefault(require("mime"));
const multer_1 = __importDefault(require("multer"));
const BaseResponse_1 = __importDefault(require("../BaseResponse/BaseResponse"));
const AppValidationError_1 = __importDefault(require("../errors/AppValidationError"));
class MulterMiddleware extends BaseResponse_1.default {
    execute(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const multerConfig = {
                    limits: {
                        fileSize: 5 * 1024 * 1024, // 5 MB,
                    },
                    fileFilter: (req, file, cb) => {
                        const type = mime_1.default.extension(file.mimetype);
                        const allowFormats = ['pdf', 'PDF'];
                        if (allowFormats.includes(`${type}`)) {
                            cb(null, true);
                        }
                        else {
                            cb(new Error('error de type'));
                        }
                    },
                };
                const multerArch = (0, multer_1.default)(multerConfig).single('img');
                multerArch(req, res, err => {
                    var _a;
                    if (req.file) {
                        const buffer = Buffer.from(req.file.buffer).toString('base64');
                        req.body.img = buffer;
                        console.log('buffer hash :>> ', buffer);
                    }
                    if (err) {
                        let errCode = err.code;
                        let errMessage = err.message || err;
                        if ((_a = err.message) === null || _a === void 0 ? void 0 : _a.includes('messages.file.multerInvalidDirectory')) {
                            errCode = 400;
                            errMessage = 'messages.file.invalidDirectory';
                        }
                        if (err.message == 'messages.file.multerMaxLength') {
                            errCode = 400;
                            errMessage = 'messages.file.maxLength';
                        }
                        return res.status(400).send({ code: 400, message: 'Erro valid directory' });
                    }
                    return next();
                });
            }
            catch (error) {
                throw new AppValidationError_1.default(error.errors);
            }
        });
    }
}
exports.MulterMiddleware = MulterMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGVyTWlkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL211bHRlck1pZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnREFBd0I7QUFDeEIsb0RBQXlDO0FBQ3pDLGdGQUF3RDtBQUN4RCxzRkFBOEQ7QUFFOUQsTUFBYSxnQkFBaUIsU0FBUSxzQkFBWTtJQUMxQyxPQUFPLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQjs7WUFDM0QsSUFBSTtnQkFDRixNQUFNLFlBQVksR0FBWTtvQkFDNUIsTUFBTSxFQUFFO3dCQUNOLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRO3FCQUNwQztvQkFDRCxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO3dCQUM1QixNQUFNLElBQUksR0FBRyxjQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDM0MsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBRXBDLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUU7NEJBQ3BDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7eUJBQ2hCOzZCQUFNOzRCQUNMLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO3lCQUNoQztvQkFDSCxDQUFDO2lCQUNGLENBQUM7Z0JBRUYsTUFBTSxVQUFVLEdBQUcsSUFBQSxnQkFBTSxFQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdEQsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7O29CQUN6QixJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUU7d0JBQ1osTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFFL0QsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO3dCQUd0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUN6QztvQkFDRCxJQUFJLEdBQUcsRUFBRTt3QkFDUCxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUN2QixJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQzt3QkFFcEMsSUFBSSxNQUFBLEdBQUcsQ0FBQyxPQUFPLDBDQUFFLFFBQVEsQ0FBQyxzQ0FBc0MsQ0FBQyxFQUFFOzRCQUNqRSxPQUFPLEdBQUcsR0FBRyxDQUFDOzRCQUNkLFVBQVUsR0FBRyxnQ0FBZ0MsQ0FBQzt5QkFDL0M7d0JBRUQsSUFBSSxHQUFHLENBQUMsT0FBTyxJQUFJLCtCQUErQixFQUFFOzRCQUNsRCxPQUFPLEdBQUcsR0FBRyxDQUFDOzRCQUNkLFVBQVUsR0FBRyx5QkFBeUIsQ0FBQzt5QkFDeEM7d0JBRUQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQztxQkFDN0U7b0JBQ0QsT0FBTyxJQUFJLEVBQUUsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUFDLE9BQU8sS0FBVSxFQUFFO2dCQUNuQixNQUFNLElBQUksNEJBQWtCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVDO1FBQ0gsQ0FBQztLQUFBO0NBQ0Y7QUFuREQsNENBbURDIn0=