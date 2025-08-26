import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator';

export enum TypeUser {
  ADM = 'ADM',
  GES = 'GES',
  COL = 'COL',
}

// Usuário
export class UserDTO {
  @IsNotEmpty()
  id!: string;

  Name: string;

  @IsEmail()
  Email: string;

  Password: string;

  @IsEnum(TypeUser, {
    message: 'O tipo precisa ser ou ADM ou Gestor ou Colaborador',
  })
  Type: TypeUser;
}
