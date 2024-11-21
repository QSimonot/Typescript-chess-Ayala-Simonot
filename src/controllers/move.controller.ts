import {
    Controller,
    Get,
    Post,
    Delete,
    Route,
    Path,
    Body,
    Tags,
    Patch,
    Security,
  } from "tsoa";
  import { moveService } from "../services/move.service";
  import {
    MoveInputDTO,
    MoveInputPatchDTO,
    MoveOutputDTO,
  } from "../dto/move.dto";
  
  @Route("move")
  @Tags("Move")
  export class MoveController extends Controller {
    // Récupère tous les utilisateurs
    @Get("/")
    @Security("jwt")
    public async getAllMoves(): Promise<MoveOutputDTO[]> {
      return moveService.getAllMoves();
    }
  
    // Récupère un utilisateur par ID
    @Get("{id}")
    @Security("jwt")
    public async getMoveById(@Path() id: number): Promise<MoveOutputDTO> {
      return moveService.getMoveById(id);
    }
  
    // Crée un nouvel utilisateur
    @Post("/")
    @Security("jwt")
    public async createMove(
      @Body() requestBody: MoveInputDTO,
    ): Promise<MoveOutputDTO> {
      const { id, move } = requestBody;
      return moveService.createMove(id, move);
    }
  
    // Supprime un utilisateur par ID
    @Delete("{id}")
    @Security("jwt")
    public async deleteMove(@Path() id: number): Promise<void> {
      await moveService.deleteMove(id);
    }
  
    // Met à jour un utilisateur par ID
    @Patch("{id}")
    @Security("jwt")
    public async updateMove(
      @Path() id: number,
      @Body() requestBody: MoveInputPatchDTO,
    ): Promise<MoveOutputDTO> {
      return moveService.updateMove(id, requestBody.move);
    }
  }
  