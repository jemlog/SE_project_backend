import { Router } from 'express';
import * as clothController from '../controller/cloth';

const router = Router();

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

export default router;
