import { IRequestMultiPartDTO } from "../models/dto/IRequestMultipartDTO";

export interface IMultiformDataService {
  execute(data: IRequestMultiPartDTO): Promise<IRequestMultiPartDTO>;
}
