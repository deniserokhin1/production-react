import { User } from "05_entities/User"

export interface IComment {
    id: string
    user: User
    text: string
}