import { v4 } from 'uuid'

export class User {
    public readonly id: string
    public name: string
    public bio: string
    public email: string
    public profileImage: string
    public acessToken: string

    constructor (props: Omit<User, 'id'>, id?: string) {
      Object.assign(this, props)

      if (!id) {
        this.id = v4()
      }
    }
}
