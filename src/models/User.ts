import { Table, Column, BeforeCreate, Model, HasMany, HasOne } from 'sequelize-typescript'
import bcrypt from 'bcrypt'
import UserAilment from './UserAilment'
import UserMedia from './UserMedia'
import UserSetting from './UserSetting'
import TherapistSetting from './TherapistSetting'
import UserSession from './UserSession'
import { DataTypes } from 'sequelize'

@Table({
    modelName: '"User"'
})
export default class User extends Model {
    @Column(DataTypes.STRING)
    name!: string

    @Column(DataTypes.STRING)
    email!: string

    @Column(DataTypes.STRING)
    password!: string

    @Column(DataTypes.STRING)
    userType!: 'therapist' | 'patient'

    @HasMany(() => UserAilment)
    ailments!: UserAilment[]

    @HasMany(() => UserMedia)
    media!: UserMedia[]

    @HasMany(() => UserSession, 'requestedBy')
    sessions!: UserSession[]

    @HasMany(() => UserSession, 'therapist')
    therapistSessions!: UserSession[]

    @HasOne(() => UserSetting)
    userSetting!: UserSetting

    @HasOne(() => TherapistSetting)
    therapistSetting!: TherapistSetting


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