export enum TypeUser {
  ADM = 'Administrador',
  GES = 'Gestor',
  COL = 'Colaborador',
}

export class UserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  type: TypeUser;
}
