import { BuildOptions, DataTypes, Model, Sequelize } from 'sequelize';

interface SubqueryModelAttributes extends SubqueryCreationAttributes {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface SubqueryCreationAttributes {
  name: string;
  dbSchema: string;
  version?: string;
  hash: string;
  nextBlockHeight?: number;
}

export interface SubqueryModel
  extends Model<SubqueryModelAttributes, SubqueryCreationAttributes>,
    SubqueryModelAttributes {}

export type SubqueryRepo = typeof Model & {
  new (values?: any, options?: BuildOptions): SubqueryModel;
};

// class SubqueryEntity extends Model<
//   SubqueryModelAttributes,
//   SubqueryCreationAttributes
// > {}

export function SubqueryFactory(sequelize: Sequelize): SubqueryRepo {
  return <SubqueryRepo>sequelize.define(
    'Subquery',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      dbSchema: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      version: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nextBlockHeight: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    { underscored: true },
  );
}
