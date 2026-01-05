export const ErrorCodes = {
  code: 401,
  error: 'missing_api_key',
  title: 'API Key Error',
  message: 'API key is missing. Please provide a valid API key.',
  internalCode: 'EO1_401_missing_api_key',
} as const;

export type ErrorCodesType = typeof ErrorCodes;
