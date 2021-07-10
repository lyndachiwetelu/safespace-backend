import { Table, Column, ForeignKey, Model, BelongsTo} from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import User from './User'

@Table({
    modelName: '"User_Ailment"',
    timestamps: false,
})
export default class UserAilment extends Model {
    @ForeignKey(() => User)
    @Column(DataTypes.NUMBER)
    userId!: Number

    @Column(DataTypes.STRING)
    ailmentKey!: string

    @BelongsTo(() => User)
    user!: User

    public toJSON() {
        return this.get({plain:true})
    }
}