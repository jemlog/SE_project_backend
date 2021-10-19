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
exports.createUser = exports.getAllUsers = void 0;
const user_1 = require("../entity/user");
function getAllUsers(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield user_1.User.find({});
            res.status(200).json({ code: 200, data: user });
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    });
}
exports.getAllUsers = getAllUsers;
function createUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { firstName, lastName, age } = req.body;
        try {
            const user = user_1.User.create({ firstName, lastName, age });
            const savedUser = yield user_1.User.save(user);
            res.status(201).json({ code: 201, data: savedUser });
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    });
}
exports.createUser = createUser;
//# sourceMappingURL=user.js.map