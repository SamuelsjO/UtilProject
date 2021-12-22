"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = require("dotenv");
require("express-async-errors");
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const AppError_1 = __importDefault(require("./errors/AppError"));
const AppValidationError_1 = __importDefault(require("./errors/AppValidationError"));
const routes_1 = __importDefault(require("./routes"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.use('/api/v1', routes_1.default);
app.use((err, request, response, _) => {
    var _a, _b;
    if (err instanceof AppValidationError_1.default) {
        return response.status(err.statusCode).json({
            status: 'validation error',
            errors: err.errors,
        });
    }
    if (err instanceof AppError_1.default) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    console.error(err);
    const statusCode = (_a = err.statusCode) !== null && _a !== void 0 ? _a : 500;
    const message = (_b = err.message) !== null && _b !== void 0 ? _b : 'Interval server error';
    return response.status(statusCode).json({
        err,
        status: 'error',
        message,
    });
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUN4Qiw4REFBcUM7QUFDckMsbUNBQWdDO0FBQ2hDLGdDQUE4QjtBQUM5QixzREFBbUY7QUFDbkYsNEJBQTBCO0FBQzFCLGlFQUF5QztBQUN6QyxxRkFBNkQ7QUFHN0Qsc0RBQThCO0FBRTlCLElBQUEsZUFBTSxHQUFFLENBQUM7QUFFVCxNQUFNLEdBQUcsR0FBRyxJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUV0QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztBQUVoQixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUUzQixHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxnQkFBTSxDQUFDLENBQUM7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQWdCLEVBQUUsT0FBZ0IsRUFBRSxRQUFrQixFQUFFLENBQWUsRUFBRSxFQUFFOztJQUNsRixJQUFJLEdBQUcsWUFBWSw0QkFBa0IsRUFBRTtRQUNyQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUMxQyxNQUFNLEVBQUUsa0JBQWtCO1lBQzFCLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtTQUNuQixDQUFDLENBQUM7S0FDSjtJQUVELElBQUksR0FBRyxZQUFZLGtCQUFRLEVBQUU7UUFDM0IsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUMsTUFBTSxFQUFFLE9BQU87WUFDZixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87U0FDckIsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRW5CLE1BQU0sVUFBVSxHQUFHLE1BQUEsR0FBRyxDQUFDLFVBQVUsbUNBQUksR0FBRyxDQUFDO0lBQ3pDLE1BQU0sT0FBTyxHQUFHLE1BQUEsR0FBRyxDQUFDLE9BQU8sbUNBQUksdUJBQXVCLENBQUM7SUFFdkQsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0QyxHQUFHO1FBQ0gsTUFBTSxFQUFFLE9BQU87UUFDZixPQUFPO0tBQ1IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDSCxrQkFBZSxHQUFHLENBQUMifQ==