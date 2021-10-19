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
exports.deleteCloth = exports.updateCloth = exports.createCloth = exports.getMatchClothes = exports.getAllClothes = void 0;
const typeorm_1 = require("typeorm");
const cloth_1 = require("../entity/cloth");
function getAllClothes(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cloth = yield cloth_1.Cloth.find({});
            res.status(200).json({
                code: 200,
                data: cloth,
            });
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    });
}
exports.getAllClothes = getAllClothes;
function getMatchClothes(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { top_bottom, short_long, color, material } = req.body;
        try {
            const selectedClothes = yield cloth_1.Cloth.find({
                where: {
                    top_bottom: top_bottom ? top_bottom : (0, typeorm_1.Not)('null'),
                    short_long: short_long ? short_long : (0, typeorm_1.Not)('null'),
                    color: color ? color : (0, typeorm_1.Not)('null'),
                    material: material ? material : (0, typeorm_1.Not)('null'),
                },
                order: {
                    id: 'ASC',
                },
            });
            res.status(200).json({ code: 200, data: selectedClothes });
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    });
}
exports.getMatchClothes = getMatchClothes;
function createCloth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { top_bottom, short_long, color, material } = req.body;
        try {
            const cloth = cloth_1.Cloth.create({ top_bottom, short_long, color, material });
            const savedCloth = yield cloth_1.Cloth.save(cloth);
            res.status(201).json({ code: 201, data: savedCloth });
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    });
}
exports.createCloth = createCloth;
function updateCloth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield cloth_1.Cloth.findOne({ where: { id } });
            const changedUser = yield cloth_1.Cloth.update(id, req.body);
            res.status(200).json({ code: 200, message: changedUser });
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    });
}
exports.updateCloth = updateCloth;
function deleteCloth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield cloth_1.Cloth.find({ where: { id } });
            const deleteUser = yield cloth_1.Cloth.remove(user);
            res.status(204).json({ code: 204, message: deleteUser });
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    });
}
exports.deleteCloth = deleteCloth;
//# sourceMappingURL=cloth.js.map