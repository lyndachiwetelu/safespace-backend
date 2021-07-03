import { Table, Column, ForeignKey, Model } from 'sequelize-typescript'
import User from './User'

@Table({
    modelName: '"User_Setting"',
    timestamps: false,
})
export default class UserSetting extends Model {
    @ForeignKey(() => User)
    @Column
    userId!: number

    @Column
    age!: number

    @Column
    hasHadTherapy!: boolean

    @Column
    religiousTherapy!: 'none' | 'muslim' |'christian' |'hindu' | 'buddhist'

    @Column
    couplesTherapy!: boolean

    public toJSON() {
        return this.get({plain:true})
    }

}