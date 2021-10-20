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
// 모든 옷 다 가져오기
function getAllClothes(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const cloth = yield cloth_1.Cloth.find({});
            return res.status(200).json({
                code: 200,
                data: cloth,
            });
        }
        catch (error) {
            console.error(error);
        }
    });
}
exports.getAllClothes = getAllClothes;
// 필터링 조건에 맞는 옷만 가지고 오기
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
// 새 옷 집어넣기
function createCloth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { top_bottom, short_long, color, material } = req.body;
        try {
            const cloth = cloth_1.Cloth.create({ top_bottom, short_long, color, material });
            const savedCloth = yield cloth.save();
            res.status(201).json({ code: 201, data: savedCloth });
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    });
}
exports.createCloth = createCloth;
// 옷 정보 업데이트하기
function updateCloth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield cloth_1.Cloth.findOne(id);
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
// 옷 삭제하기
function deleteCloth(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const user = yield cloth_1.Cloth.findOne(id);
            const deleteUser = yield (user === null || user === void 0 ? void 0 : user.remove());
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