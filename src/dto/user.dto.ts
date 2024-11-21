export interface UserInputDTO {
  username: string;
  password: string;
  elo:number;
}

export interface UserInputPatchDTO {
  username?: string;
  password?: string;
  elo:number;
}

export interface UserOutputDTO {
  id: number;
  username: string;
  password: string;
  elo:number;

}
