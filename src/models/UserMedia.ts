import { Table, Column, ForeignKey, Model} from 'sequelize-typescript'
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

    public toJSON() {
        return this.get({plain:true})
    }

}