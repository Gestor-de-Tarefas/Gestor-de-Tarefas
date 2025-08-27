import { get } from "http";

export const mockConfigService = {
    get: jest.fn().mockReturnValue('fake-jwt-secret')
}