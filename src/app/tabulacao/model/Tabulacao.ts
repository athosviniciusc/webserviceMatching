import {Column, DataType, Table} from "sequelize-typescript";
import {AbstractModel, IAbstractModel} from '../../common/model/AbstractModel';

@Table({tableName:'tabulacao', modelName: 'Tabulacao'})
export class Tabulacao extends AbstractModel<Tabulacao> implements  ITabulacao {

    @Column({field:'id', type: DataType.INTEGER, primaryKey:true, allowNull: false, autoIncrement:true})
    tabulacaoId: number;

    @Column({allowNull: false, field: 'nome_cliente'})
    nomeCliente: string;

    @Column({allowNull: false, field: 'protocolo'})
    protocolo: string;

    @Column({allowNull: false, field: 'data_atendimento'})
    dataAtendimento: Date;

    @Column({allowNull: false, field: 'numero_binado'})
    numeroBinado: Date;

    @Column({allowNull: false, field: 'numero_acesso'})
    numeroAcesso: Date;

}

export interface ITabulacao extends  IAbstractModel {

    tabulacaoId: number;
    nomeCliente: string;
    protocolo: string;
    dataAtendimento: Date;
    numeroBinado: Date;
    numeroAcesso: Date;
}
