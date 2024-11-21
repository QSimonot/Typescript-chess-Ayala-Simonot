import { Model, DataTypes, DateDataType } from "sequelize";
import sequelize from "../config/database"; // Connection à la base de données
import { User } from "./user.model";


export interface GameAttributes {
    id?:number;
    white_id: number;
    black_id: number;
    date:Date;
    winner_id?:number;
    private:boolean;
    ranked:boolean;

}

export class Game extends Model<GameAttributes> implements GameAttributes {
  public id!: number;
  public white_id!: number;
  public black_id!: number;
  public date!: Date;
  public winner_id!: number;
  public private!: boolean;
  public ranked!: boolean;
  public white!:User;
  public black!:User;
  public winner!:User;
}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    white_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    black_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    winner_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ranked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Game",
  },
);

Game.belongsTo(User, { foreignKey: "black_id", as: "black_game" });
Game.belongsTo(User, { foreignKey: "white_id", as: "white_game" });
Game.belongsTo(User, { foreignKey: "winner_id", as: "winner_game" });


User.hasMany(Game, { sourceKey: "id", foreignKey: "black_id", as: "black" });
User.hasMany(Game, { sourceKey: "id", foreignKey: "white_id", as: "white" });
User.hasMany(Game, { sourceKey: "id", foreignKey: "winner_id", as: "winner" });


