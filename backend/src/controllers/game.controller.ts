import {
    Body,
    Controller,
    Delete,
    Get,
    Patch,
    Path,
    Post,
    Route,
    Tags,
    Security,
  } from "tsoa";
import {
    GameInputDTO,
    GameInputPatchDTO,
    GameOutputDTO,
  } from "../dto/game.dto";
import { gameService } from "../services/game.service";
import { userService } from "../services/user.service";
  
@Route("games")
@Tags("Games")
export class GameController extends Controller {

    @Get("/")
    @Security("jwt",["game:read"])
    public async getAllGames(): Promise<GameOutputDTO[]> {
        return gameService.getAllGame();
    }
  
    @Get("{id}")
    @Security("jwt",["game:read"])
    public async getGame(@Path("id") id: number): Promise<GameOutputDTO> {
      return await gameService.getGameById(id);
    }

    @Get("/user/{id}")
    @Security("jwt",["game:read"])
    public async getGameOfUser(@Path("id") id: number): Promise<GameOutputDTO[]> {
      return await gameService.getUserGame(id);
    }
  
    @Post("/")
    @Security("jwt",["game:create"])
    public async postGame(
      @Body() requestBody: GameInputDTO,
    ): Promise<GameOutputDTO> {
      return gameService.createGame(
        requestBody.white_id,
        requestBody.black_id,
        requestBody.date,
        requestBody.hidden,
        requestBody.ranked,

      );
    }
  
    @Patch("{id}")
    @Security("jwt",["game:write"])
    public async patchGame(
      @Path("id") id: number,
      @Body() requestBody: GameInputPatchDTO,
    ): Promise<GameOutputDTO> {
      return gameService.updateGame(
        id,
        requestBody.white,
        requestBody.black,
        requestBody.date,
        requestBody.winner_id,
        requestBody.hidden,
        requestBody.ranked
      );
    }
  
    @Delete("{id}")
    @Security("jwt",["game:delete"])
    public async deleteGame(@Path("id") id: number): Promise<void> {
      await gameService.deleteGame(id);
    }
  
}
  