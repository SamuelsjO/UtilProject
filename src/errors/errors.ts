export enum registerUserCAError {
  userAlreadyExist = 'Identity already exists in the wallet',
  defaultError = 'Error on registering user on ATC',
  handshakeSSLError = 'ERR_OSSL_X509_KEY_VALUES_MISMATCH',
  invalidProfile = 'Invalid credential profile for this operation'
}

export enum generateUserCertError {
  defaultError = 'Error in generate user certificates on ATC',
  writeCertError = 'Error saving certificates'
}

export enum personRelatedErrors {
  notValidCredential = 'Person do not have a valid credential',
  notFoundCredentialToDocument = 'This document does not have a credential attached',
  personNotFound = 'Unregistered person',
  findPersonError = 'Error when fetching the person data'
}

export enum ariesErrors {
  unableConnect = 'Unable to connect to Agent',
  invalidKeys = '`Recipient keys are invalid`',
  connectError = `Error while connecting to aries: @@code@@`
}

export enum submitTransactionError {
  default = 'Error on submitting transaction to ATC'
}

export enum multerErrors {
  typeInvalid = 'Invalid type document',
  valid = 'Error validation Middleware',
  multerMaxLength = 'File too large',
  maxLength = 'O tamanho máximo do arquivo é 6 MB'
}