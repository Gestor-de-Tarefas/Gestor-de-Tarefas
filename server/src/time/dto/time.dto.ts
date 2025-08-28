import { IsArray, IsNotEmpty} from 'class-validator'

export class TimeDTO {

    @IsNotEmpty()
    id: string;

    Name: string

    @IsArray()
    Userids: String[]
}