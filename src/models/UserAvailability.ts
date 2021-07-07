import { Table, Column, ForeignKey, Model, BelongsTo} from 'sequelize-typescript'
import User from './User'

@Table({
    modelName: '"User_Availability"'
})
export default class UserAvailability extends Model {
    @ForeignKey(() => User)
    @Column
    userId!: number

    @Column
    day!: Date

    @Column
    from!: string

    @Column
    to!: string

    @BelongsTo(() => User)
    user!: User

    public toJSON() {
        return this.get({plain:true})
    }

}