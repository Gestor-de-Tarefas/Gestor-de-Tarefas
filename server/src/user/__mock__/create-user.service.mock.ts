import { create } from "domain";
import { TypeUser } from "../dto/user.DTO"
import { v4 as uuid } from 'uuid';

export const CreatemockUser = {
    id: "e9dd678d-0ae6-4540-8a01-014317dc066f",
    Name: 'Wladson',
    Email: 'wladson123@gmail.com',
    Password: 'wd123456',
    Type: TypeUser.COL
}

export const mockUserDTO = {
    id: "e9dd678d-0ae6-4540-8a01-014317dc066f",
    Name: 'Wladson',
    Email: 'wladson123@gmail.com',
    Password: 'wd123456',
    Type: TypeUser.COL
}

export const mockCreateService = {
    create: jest.fn().mockResolvedValue(CreatemockUser)
}