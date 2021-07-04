import { Table, Column, ForeignKey, Model, BelongsTo } from 'sequelize-typescript'
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

    @BelongsTo(() => User)
    user!: User

    public toJSON() {
        return this.get({plain:true})
    }

}