import { Request, Response } from 'express';
import AppValidationError from '../../errors/AppValidationError';
import { IRequestMultiPartDTO } from '../../models/dto/IRequestMultipartDTO';
import { IMultiformDataService } from '../../services/IMultiformDataService';
import BaseController from '../BaseController';

export default class MultiformDataController extends BaseController {
  constructor(private multiDataService: IMultiformDataService) {
    super();
  }

  protected async executeImpl(req: Request, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    try {
      const multiFom: IRequestMultiPartDTO = req.body;

      const data = await this.multiDataService.execute(multiFom);

      if (req.files) {
        return this.respondCreated(res, {
          multiFom,
        });
      }
      return this.respondCreated(res, { data });
    } catch (error: any) {
      if (error instanceof AppValidationError) {
        return this.respondValidationError(res, error);
      }
      return this.respondError(res, error);
    }
  }
}
