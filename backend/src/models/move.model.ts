import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database"; // Connexion à la base de données
import { Game } from "./game.model";

export interface MoveAttributes {
  id?: number;
  move?: string;

}

export class Move
  extends Model<MoveAttributes>
  implements MoveAttributes
{
  public id!:number;
  public id_game!: Game;
  public move!: string;

}

Move.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    move: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
  },
  {
    sequelize,
    tableName: "Move",
  },
);

Move.belongsTo(Game, { foreignKey: "id", as: "id_game" });


Game.hasMany(Move, { sourceKey: "id", foreignKey: "id", as: "id_game" });