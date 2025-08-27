// execução com token
export const mockExecutionContextWithToken = {
  switchToHttp: () => ({
    getRequest: () => ({ headers: { authorization: 'Bearer token' } }),
  }),
} as any;

//execução sem token
export const mockExecutionContextWithoutToken = {
  switchToHttp: () => ({
    getRequest: () => ({ headers: {} }),
  }),
} as any;

// execução com token inválido
export const mockExecutionContextWithInvalidToken = {
  switchToHttp: () => ({
    getRequest: () => ({ headers: { authorization: 'Bearer invalid-token' } }),
  }),
} as any;