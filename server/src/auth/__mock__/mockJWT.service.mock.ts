

export const mockJWTService = {
    sign: jest.fn().mockReturnValue('fake-jwt-token'),
    verifyAsync: jest.fn().mockReturnValue({ id: "e9dd678d-0ae6-4540-8a01-014317dc066f" }),
}