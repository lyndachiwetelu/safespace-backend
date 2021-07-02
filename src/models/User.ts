import { Table, Column, Model } from 'sequelize-typescript'

@Table({
    modelName: '"User"'
})
export default class User extends Model {
    @Column
    name!: string

    @Column
    email!: string

    @Column
    password!: string

    public toJSON() {
        return this.get({plain:true})
    }

}