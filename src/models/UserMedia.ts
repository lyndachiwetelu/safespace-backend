import { Table, Column, ForeignKey, Model, BelongsTo} from 'sequelize-typescript'
import User from './User'
import { DataTypes } from 'sequelize'

@Table({
    modelName: '"User_Media"',
    timestamps: false,
})
export default class UserMedia extends Model {
    @ForeignKey(() => User)
    @Column(DataTypes.NUMBER)
    userId!: number

    @Column(DataTypes.STRING)
    mediaKey!: string

    @BelongsTo(() => User)
    user!: User

    public toJSON() {
        return this.get({plain:true})
    }

}