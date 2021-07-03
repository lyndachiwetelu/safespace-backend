import { Table, Column, BeforeCreate, Model } from 'sequelize-typescript'
import bcrypt from 'bcrypt'

@Table({
    modelName: '"User"'
})
export default class User extends Model {
    @Column
    name!: string

    @Column
    email!: string

    @Column
    password!: string

    @BeforeCreate
    public static hashPassword(instance: User) {
      const salt = bcrypt.genSaltSync();
      instance.set('password', bcrypt.hashSync(instance.get('password'), salt));
    }
  
    public validPassword = (password:string) => {
      return bcrypt.compareSync(password, this.get('password'));
    }

    public toJSON() {
        return this.get({plain:true})
    }

}