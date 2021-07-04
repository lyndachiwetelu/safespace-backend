import { Table, Column, BeforeCreate, Model, HasMany, HasOne } from 'sequelize-typescript'
import bcrypt from 'bcrypt'
import UserAilment from './UserAilment'
import UserMedia from './UserMedia'
import UserSetting from './UserSetting'
import TherapySetting from './TherapistSetting'

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

    @Column
    userType!: 'therapist' | 'patient'

    @HasMany(() => UserAilment)
    ailments!: UserAilment[]

    @HasMany(() => UserMedia)
    media!: UserMedia[]

    @HasOne(() => UserSetting)
    userSetting!: UserSetting

    @HasOne(() => TherapySetting)
    therapistSetting!: TherapySetting


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