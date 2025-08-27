import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';

import { CreatemockUser, mockUserDTO, mockCreateService } from './__mock__/create-user.service.mock';
import { mockAuthService } from '../auth/__mock__/mockAuth.service.mock';

describe('UserController', () => {
  let controller: UserController;
  let service : UserService
  let auth: AuthService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers:[
        {provide: UserService, useValue: mockCreateService},
        {provide: AuthService, useValue: mockAuthService}
    ]
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
    auth = module.get<AuthService>(AuthService);

  });

  it('deve criar um usuario e gerar token JWT', async () => {
    jest.spyOn(service,"create").mockResolvedValue(CreatemockUser)
    const result = await controller.create(mockUserDTO)

    expect(result).toEqual(CreatemockUser)
    expect(service.create).toHaveBeenCalledWith(mockUserDTO)
    expect(auth.signIn).toHaveBeenCalledWith(
      mockUserDTO.Email,
      mockUserDTO.Password
    )
  });
});
