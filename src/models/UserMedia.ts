import { Table, Column, ForeignKey, Model, BelongsTo} from 'sequelize-typescript'
import User from './User'

@Table({
    modelName: '"User_Media"',
    timestamps: false,
})
export default class UserMedia extends Model {
    @ForeignKey(() => User)
    @Column
    userId!: number

    @Column
    mediaKey!: string

    @BelongsTo(() => User)
    user!: User

    public toJSON() {
        return this.get({plain:true})
    }

}