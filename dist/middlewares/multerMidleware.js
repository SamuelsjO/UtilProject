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
                        const allowFormats = ["pdf", "PDF"];
                        if (allowFormats.includes(`${type}`)) {
                            cb(null, true);
                        }
                        else {
                            cb(new Error("error de type"));
                        }
                    },
                };
                const multerArch = (0, multer_1.default)(multerConfig).fields([
                    {
                        name: "clinicalEvolution" /* clinicalEvolution */,
                        maxCount: 1,
                    },
                    {
                        name: "labReportResult" /* labReportResult */,
                        maxCount: 1,
                    },
                    {
                        name: "reportImageResult" /* reportImageResult */,
                        maxCount: 1,
                    },
                ]);
                multerArch(req, res, (err) => {
                    var _a;
                    if (req.files) {
                        const fileKeys = Object.keys(req.files);
                        const filesReq = req.files;
                        fileKeys.forEach((key) => {
                            const file = filesReq[key][0];
                            const buffer = Buffer.from(file.buffer).toString("base64");
                            if (file.fieldname === "clinicalEvolution" /* clinicalEvolution */)
                                req.body.clinicalEvolution = buffer;
                            if (file.fieldname === "labReportResult" /* labReportResult */)
                                req.body.labReportResult = buffer;
                            if (file.fieldname === "reportImageResult" /* reportImageResult */)
                                req.body.reportImageResult = buffer;
                        });
                    }
                    if (err) {
                        let errCode = err.code;
                        let errMessage = err.message || err;
                        console.log("err :>> ", err);
                        if ((_a = err.message) === null || _a === void 0 ? void 0 : _a.includes("messages.file.multerInvalidDirectory")) {
                            errCode = 400;
                            errMessage = "messages.file.invalidDirectory";
                        }
                        if (err.Error == "error de type") {
                            errCode = 400;
                            errMessage = "messages.file.maxLength";
                        }
                        return res
                            .status(400)
                            .send({ code: 400, message: "Erro valid type" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGVyTWlkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21pZGRsZXdhcmVzL211bHRlck1pZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnREFBd0I7QUFDeEIsb0RBQXlDO0FBQ3pDLGdGQUF3RDtBQUN4RCxzRkFBOEQ7QUFHOUQsTUFBYSxnQkFBaUIsU0FBUSxzQkFBWTtJQUMxQyxPQUFPLENBQ1gsR0FBWSxFQUNaLEdBQWEsRUFDYixJQUFrQjs7WUFFbEIsSUFBSTtnQkFDRixNQUFNLFlBQVksR0FBWTtvQkFDNUIsTUFBTSxFQUFFO3dCQUNOLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRO3FCQUNwQztvQkFDRCxVQUFVLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFO3dCQUM1QixNQUFNLElBQUksR0FBRyxjQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDM0MsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7d0JBRXBDLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUU7NEJBQ3BDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7eUJBQ2hCOzZCQUFNOzRCQUNMLEVBQUUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO3lCQUNoQztvQkFDSCxDQUFDO2lCQUNGLENBQUM7Z0JBRUYsTUFBTSxVQUFVLEdBQUcsSUFBQSxnQkFBTSxFQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQztvQkFDN0M7d0JBQ0UsSUFBSSw2Q0FBZ0M7d0JBQ3BDLFFBQVEsRUFBRSxDQUFDO3FCQUNaO29CQUNEO3dCQUNFLElBQUkseUNBQThCO3dCQUNsQyxRQUFRLEVBQUUsQ0FBQztxQkFDWjtvQkFDRDt3QkFDRSxJQUFJLDZDQUFnQzt3QkFDcEMsUUFBUSxFQUFFLENBQUM7cUJBQ1o7aUJBQ0YsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7O29CQUMzQixJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7d0JBQ2IsTUFBTSxRQUFRLEdBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2xELE1BQU0sUUFBUSxHQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUM7d0JBRWhDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFXLEVBQUUsRUFBRTs0QkFDL0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUM5QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBRTNELElBQUksSUFBSSxDQUFDLFNBQVMsZ0RBQW1DO2dDQUNuRCxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQzs0QkFDdEMsSUFBSSxJQUFJLENBQUMsU0FBUyw0Q0FBaUM7Z0NBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQzs0QkFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxnREFBbUM7Z0NBQ25ELEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO3dCQUN4QyxDQUFDLENBQUMsQ0FBQztxQkFDSjtvQkFFRCxJQUFJLEdBQUcsRUFBRTt3QkFDUCxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO3dCQUN2QixJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsT0FBTyxJQUFJLEdBQUcsQ0FBQzt3QkFFcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUM7d0JBRTdCLElBQUksTUFBQSxHQUFHLENBQUMsT0FBTywwQ0FBRSxRQUFRLENBQUMsc0NBQXNDLENBQUMsRUFBRTs0QkFDakUsT0FBTyxHQUFHLEdBQUcsQ0FBQzs0QkFDZCxVQUFVLEdBQUcsZ0NBQWdDLENBQUM7eUJBQy9DO3dCQUVELElBQUksR0FBRyxDQUFDLEtBQUssSUFBSSxlQUFlLEVBQUU7NEJBQ2hDLE9BQU8sR0FBRyxHQUFHLENBQUM7NEJBQ2QsVUFBVSxHQUFHLHlCQUF5QixDQUFDO3lCQUN4Qzt3QkFFRCxPQUFPLEdBQUc7NkJBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQzs2QkFDWCxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxDQUFDLENBQUM7cUJBQ3BEO29CQUNELE9BQU8sSUFBSSxFQUFFLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFBQyxPQUFPLEtBQVUsRUFBRTtnQkFDbkIsTUFBTSxJQUFJLDRCQUFrQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QztRQUNILENBQUM7S0FBQTtDQUNGO0FBakZELDRDQWlGQyJ9