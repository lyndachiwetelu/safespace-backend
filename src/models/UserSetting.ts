import { Table, Column, ForeignKey, Model, BelongsTo } from 'sequelize-typescript'
import User from './User'
import { DataTypes } from 'sequelize'

@Table({
    modelName: '"User_Setting"',
    timestamps: false,
})
export default class UserSetting extends Model {
    @ForeignKey(() => User)
    @Column(DataTypes.NUMBER)
    userId!: number

    @Column(DataTypes.NUMBER)
    age!: number

    @Column(DataTypes.BOOLEAN)
    hasHadTherapy!: boolean

    @Column(DataTypes.STRING)
    religiousTherapy!: 'none' | 'muslim' |'christian' |'hindu' | 'buddhist'

    @Column(DataTypes.BOOLEAN)
    couplesTherapy!: boolean

    @BelongsTo(() => User)
    user!: User

    public toJSON() {
        return this.get({plain:true})
    }

}