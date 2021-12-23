import { IRequestMultiPartDTO } from '../../models/dto/IRequestMultipartDTO';
import { IMultiformDataService } from '../IMultiformDataService';

export default class MultiformDataService implements IMultiformDataService {
  public async execute(data: IRequestMultiPartDTO): Promise<IRequestMultiPartDTO> {
    try {
      console.log('data :>> ', data);
      return null;
    } catch (error) {}
  }
}
