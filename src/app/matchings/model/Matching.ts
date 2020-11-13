import {Column, DataType, Table} from "sequelize-typescript";
import {BelongsTo, ForeignKey} from "sequelize-typescript";
import {AbstractModel, IAbstractModel} from '../../common/model/AbstractModel';
import {UUID} from "sequelize";
import {Gravacao} from "../../gravacao/model/Gravacao";
import {Tabulacao} from "../../tabulacao/model/Tabulacao";

@Table({tableName:'matching', modelName: 'Matching'})
export class Matching extends AbstractModel<Matching> implements  IMatching {

    @Column({field:'id', type: DataType.INTEGER, primaryKey:true, allowNull: false, autoIncrement:true})
    matchingId: number;

    @BelongsTo(() => Gravacao)
    gravacao: Gravacao;

    @ForeignKey(() => Gravacao)
    @Column({field:'gravacao_id', type: DataType.INTEGER})
    gravacaoId: number;

    @BelongsTo(() => Tabulacao)
    tabulacao: Tabulacao;

    @ForeignKey(() => Tabulacao)
    @Column({field:'tabulacao_id', type: DataType.INTEGER})
    tabulacaoId: number;

}



export interface IMatching extends  IAbstractModel {
    matchingId: number;
    gravacao: Gravacao;
    gravacaoId: number;
    tabulacao: Tabulacao;
    tabulacaoId: number;
}
