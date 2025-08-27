import { AuthGuard } from './auth.guard';
import { mockAuthService } from './__mock__/mockAuth.service.mock';
import { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { mockJWTService } from './__mock__/mockJWT.service.mock';
import { mockConfigService } from './__mock__/mockConfig.service.mock';
import { UnauthorizedException } from '@nestjs/common';
import { 
    mockExecutionContextWithToken, 
    mockExecutionContextWithoutToken, 
    mockExecutionContextWithInvalidToken 
} from './__mock__/mockExecutionToken.mock';


describe('AuthGuard', () => {
    let guard: AuthGuard

    beforeEach( async ()=>{
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                AuthGuard,
                {provide: ConfigService, useValue: mockConfigService},
                {provide: JwtService, useValue:mockJWTService}
            ],
        }).compile();

        guard = module.get<AuthGuard>(AuthGuard);
    });
    it('deve permitir acesso na existência do token', async ()=>{
        expect(await guard.canActivate(mockExecutionContextWithToken)).toBe(true);
    })
    it('deve bloquear o acesso an ausência de um token', async()=>{
        const mockContext = mockExecutionContextWithoutToken

        await expect(guard.canActivate(mockContext))
        .rejects
        .toThrow(UnauthorizedException)
    });
    it('deve bloquear se o token for inválido', async ()=>{
        mockJWTService.verifyAsync.mockRejectedValueOnce(new Error('invalid-token'));
        await expect(guard.canActivate(mockExecutionContextWithInvalidToken))
        .rejects
        .toThrow(UnauthorizedException)
    })
});
