"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clothController = __importStar(require("../controller/cloth"));
const router = (0, express_1.Router)();
// 모든 옷 다 가져오기
router.get('/', clothController.getAllClothes);
// 옷 하나 추가하기
router.post('/', clothController.createCloth);
// 조건에 맞은 옷 검색하기
router.post('/search', clothController.getMatchClothes);
// 옷 정보 수정하기
router.put('/:id', clothController.updateCloth);
// 옷 삭제하기
router.delete('/:id', clothController.deleteCloth);
exports.default = router;
//# sourceMappingURL=cloth.js.map