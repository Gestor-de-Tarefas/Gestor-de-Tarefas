import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { CreatemockUser } from './__mock__/create-user.service.mock';
import { prismaMock } from './__mock__/prisma.service.mock';
import { PrismaService } from '../prisma/prisma.service';
describe('UserService', () => {
  let service: UserService;
  
  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, {provide: PrismaService, useValue:prismaMock}],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('deve criar um usuário', async () => {
    prismaMock.user.create.mockResolvedValue(CreatemockUser)
    const result = await service.create({
      id: CreatemockUser.id,
      Name: CreatemockUser.Name,
      Email: CreatemockUser.Email,
      Password: CreatemockUser.Password,
      Type: CreatemockUser.Type,
    })
    expect(result).toEqual(CreatemockUser)
    expect(result.id).toBe(CreatemockUser.id)
  });

  it('deve buscar um usuário pelo email', async ()=>{
    prismaMock.user.findUnique.mockResolvedValue(CreatemockUser)
    const result = await service.findByEamil('wladson123@gmail.com')
    expect(result).toEqual(CreatemockUser)
    expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
      where: {Email: 'wladson123@gmail.com'}
    });
  });

  it('deve bloquear o acesso caso o email não exista', async ()=>{
    prismaMock.user.findUnique.mockResolvedValue(null)
    const result = await service.findByEamil("null@gmail.com")
    expect(result).toBeNull();
    expect(prismaMock.user.findUnique).toHaveBeenCalledWith({
      where: {Email: 'null@gmail.com'}
    })
  })
});
