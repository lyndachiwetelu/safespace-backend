import { Table, Column, ForeignKey, Model, BelongsTo} from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import User from './User'

@Table({
    modelName: '"User_Availability"'
})
export default class UserAvailability extends Model {
    @ForeignKey(() => User)
    @Column(DataTypes.NUMBER)
    userId!: number

    @Column(DataTypes.DATEONLY)
    day!: Date

    @Column(DataTypes.STRING)
    from!: string

    @Column(DataTypes.STRING)
    to!: string

    @BelongsTo(() => User)
    user!: User

    public toJSON() {
        return this.get({plain:true})
    }

}