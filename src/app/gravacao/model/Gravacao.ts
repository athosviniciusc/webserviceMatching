import {Column, DataType, Table} from "sequelize-typescript";
import {AbstractModel, IAbstractModel} from '../../common/model/AbstractModel';

@Table({tableName:'gravacao', modelName: 'Gravacao'})
export class Gravacao extends AbstractModel<Gravacao> implements  IGravacao {

    @Column({field:'id', type: DataType.INTEGER, primaryKey:true, allowNull: false, autoIncrement:true})
    gravacaoId: number;

    @Column({allowNull: false, field: 'telefone'})
    telefone: string;


    @Column({allowNull: false, field: 'ramal'})
    ramal: string;

    @Column({allowNull: false, field: 'data_gravacao'})
    dataGravacao: Date;

}


export interface IGravacao extends  IAbstractModel {
    gravacaoId: number;
    telefone: string;
    ramal: string;
    dataGravacao: Date;
}
