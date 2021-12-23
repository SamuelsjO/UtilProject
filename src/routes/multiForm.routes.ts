import { Request, Response, Router } from 'express';
import BaseController from '../controller/BaseController';
import MultiformDataController from '../controller/implementations/MultiformDataController';
import { MulterMiddleware } from '../middlewares/multerMidleware';
import { IMultiformDataService } from '../services/IMultiformDataService';
import MultiformDataService from '../services/implementations/MultiformDataService';

const multerMiddleware = new MulterMiddleware();

const multiFormRouter = Router();

const multiDataService: IMultiformDataService = new MultiformDataService();

const multiformDataController: BaseController = new MultiformDataController(multiDataService);

multiFormRouter.post(
  '/img',
  (req, res, next) => multerMiddleware.execute(req, res, next),
  (req: Request, res: Response) => multiformDataController.execute(req, res),
);

export default multiFormRouter;
