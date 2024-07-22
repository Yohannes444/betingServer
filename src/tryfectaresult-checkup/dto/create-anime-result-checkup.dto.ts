export class CreateAnimeResultCheckupDto {
  readonly gameId: string;
  readonly tiketerId: string;
  readonly first: number;
  readonly second: number;
  readonly third: number; // Added field
  readonly windOdd: number; // Added field
  readonly qunelaOdd: number; // Added field
  readonly exactOdd: number; // Added field
  readonly tryfectaOdd: number; // Added field
}
