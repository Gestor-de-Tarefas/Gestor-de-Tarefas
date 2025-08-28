import { IsArray, IsNotEmpty} from 'class-validator'

export class TeamDTO {

    @IsNotEmpty()
    id: string;

    Name: string

}