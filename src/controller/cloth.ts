import { NextFunction, Request, Response } from 'express';
import { Not } from 'typeorm';
import { Cloth } from '../entity/cloth';

// 모든 옷 다 가져오기
export async function getAllClothes(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const cloth = await Cloth.find({});
    return res.status(200).json({
      code: 200,
      data: cloth,
    });
  } catch (error) {
    console.error(error);
  }
}

// 필터링 조건에 맞는 옷만 가지고 오기
export async function getMatchClothes(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { top_bottom, short_long, color, material } = req.body;
  try {
    const selectedClothes = await Cloth.find({
      where: {
        top_bottom: top_bottom ? top_bottom : Not('null'), // 특정 조건이 없을 경우 'null'이 아닌 값 모두 가져오는 로직
        short_long: short_long ? short_long : Not('null'),
        color: color ? color : Not('null'),
        material: material ? material : Not('null'),
      },
      order: {
        id: 'ASC',
      },
    });
    res.status(200).json({ code: 200, data: selectedClothes });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

// 새 옷 집어넣기
export async function createCloth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { top_bottom, short_long, color, material } = req.body;
  try {
    const cloth = Cloth.create({ top_bottom, short_long, color, material });
    const savedCloth = await cloth.save();
    res.status(201).json({ code: 201, data: savedCloth });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

// 옷 정보 업데이트하기
export async function updateCloth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;
  try {
    const user = await Cloth.findOne(id);
    const changedUser = await Cloth.update(id, req.body);
    res.status(200).json({ code: 200, message: changedUser });
  } catch (error) {
    console.error(error);
    next(error);
  }
}

// 옷 삭제하기
export async function deleteCloth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { id } = req.params;
  try {
    const user = await Cloth.findOne(id);
    const deleteUser = await user?.remove();
    res.status(204).json({ code: 204, message: deleteUser });
  } catch (error) {
    console.error(error);
    next(error);
  }
}
