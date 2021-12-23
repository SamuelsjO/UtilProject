export interface IRequestMultiPartDTO {
  idProcess: string;
  idProduct: string;
  idOperation: string;

  personDocument: string;
  providerDocument: string;
  idLocal: string;
  idExternal: string[];
  idAssets: string;
  idTargetOwner: string;
  organization: string;
  numberAssets: string;

  professionalId: string;
  localAppointmentId: string;
  authPassword: string;
  reportImageResult: string;
  labelReportResult: string;
  clinicalEvolution: string;
  imageResult: string;
}
