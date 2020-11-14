import {Column, DataType, Table} from "sequelize-typescript";
import {BelongsTo, ForeignKey} from "sequelize-typescript";
import {AbstractModel, IAbstractModel} from '../../../common/model/AbstractModel';
import {Gravacao} from "../../gravacao/model/Gravacao";
import {Tabulacao} from "../../tabulacao/model/Tabulacao";

@Table({tableName:'matchings', modelName: 'Matching'})
export class Matching extends AbstractModel<Matching> implements  IMatching {

    @ForeignKey(() => Gravacao)
    @Column({field:'gravacao_id', type: DataType.INTEGER, unique: true})
    gravacaoId: number;

    @BelongsTo(() => Gravacao, { foreignKey: { allowNull: false } })
    gravacao: Gravacao;

    @ForeignKey(() => Tabulacao)
    @Column({field:'tabulacao_id', type: DataType.INTEGER, unique: true})
    tabulacaoId: number;

    @BelongsTo(() => Tabulacao, { foreignKey: { allowNull: false } })
    tabulacao: Tabulacao;

}

export interface IMatching extends  IAbstractModel {
    gravacaoId: number;
    gravacao: Gravacao;
    tabulacaoId: number;
    tabulacao: Tabulacao;
}
