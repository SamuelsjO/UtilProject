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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsers1637103699525 = void 0;
class CreateTableUsers1637103699525 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query('CREATE TABLE IF NOT EXISTS users (' +
                ' id int NOT NULL GENERATED ALWAYS AS IDENTITY ,' +
                ' name varchar(100) NOT NULL ,' +
                ' email varchar(100) NOT NULL ,' +
                ' password varchar(100) ' +
                ');');
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('users');
        });
    }
}
exports.CreateTableUsers1637103699525 = CreateTableUsers1637103699525;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYzNzEwMzY5OTUyNS1DcmVhdGVUYWJsZUF1dGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGF0YWJhc2UvbWlncmF0aW9ucy8xNjM3MTAzNjk5NTI1LUNyZWF0ZVRhYmxlQXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFQSxNQUFhLDZCQUE2QjtJQUMzQixFQUFFLENBQUMsV0FBd0I7O1lBQ3RDLE1BQU0sV0FBVyxDQUFDLEtBQUssQ0FDckIsb0NBQW9DO2dCQUNsQyxpREFBaUQ7Z0JBQ2pELCtCQUErQjtnQkFDL0IsZ0NBQWdDO2dCQUNoQyx5QkFBeUI7Z0JBQ3pCLElBQUksQ0FDUCxDQUFDO1FBQ0osQ0FBQztLQUFBO0lBRVksSUFBSSxDQUFDLFdBQXdCOztZQUN4QyxNQUFNLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUFBO0NBQ0Y7QUFmRCxzRUFlQyJ9