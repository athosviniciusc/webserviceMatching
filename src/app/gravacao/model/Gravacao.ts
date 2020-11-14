import {Column, Table} from "sequelize-typescript";
import {AbstractModel, IAbstractModel} from '../../../common/model/AbstractModel';

@Table({tableName:'gravacoes', modelName: 'Gravacao'})
export class Gravacao extends AbstractModel<Gravacao> implements  IGravacao {

    @Column({allowNull: false, field: 'telefone'})
    telefone: string;

    @Column({allowNull: false, field: 'ramal'})
    ramal: string;

    @Column({allowNull: false, field: 'data_gravacao'})
    dataGravacao: Date;

}

export interface IGravacao extends  IAbstractModel {
    telefone: string;
    ramal: string;
    dataGravacao: Date;
}
