import type {Piece} from '@/model/Piece.model';

function initBoard(): Array<Array<Piece>> {
  const b_p:Piece={type:"P",img:"Pawn_Black.svg"};
  const b_n:Piece={type:"N",img:"Knight_Black.svg"};
  const b_r:Piece={type:"R",img:"Rook_Black.svg"};
  const b_b:Piece={type:"B",img:"Bishop_Black.svg"};
  const b_k:Piece={type:"k",img:"King_Black.svg"};
  const b_q:Piece={type:"Q",img:"Queen_Black.svg"};

  const w_p:Piece={type:"P",img:"Pawn_White.svg"};
  const w_n:Piece={type:"N",img:"Knight_White.svg"};
  const w_r:Piece={type:"R",img:"Rook_White.svg"};
  const w_b:Piece={type:"B",img:"Bishop_White.svg"};
  const w_k:Piece={type:"k",img:"King_White.svg"};
  const w_q:Piece={type:"Q",img:"Queen_White.svg"};

  const emp:Piece={type:"-",img:"-"};

  const board =[
    [b_r,b_n,b_b,b_q,b_k,b_b,b_n,b_r],
    [b_p,b_p,b_p,b_p,b_p,b_p,b_p,b_p],
    [emp,emp,emp,emp,emp,emp,emp,emp],
    [emp,emp,emp,emp,emp,emp,emp,emp],
    [emp,emp,emp,emp,emp,emp,emp,emp],
    [emp,emp,emp,emp,emp,emp,emp,emp],
    [w_p,w_p,w_p,w_p,w_p,w_p,w_p,w_p],
    [w_r,w_n,w_b,w_q,w_k,w_b,w_n,w_r],
  ];

  return board;
}

function initBoolBoard():Array<Array<boolean>>{
  const board =[
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
    [false,false,false,false,false,false,false,false],
  ];
  return board;
}

function getMoves():Array<string>{
  const game = "1. e4 g6 2. c3 Bg7 3. Nf3 d6 4. b4 e5 5. Bc4 Ne7 6. O-O O-O 7. g4 d5 8. Bb3 Bxg4 9. Bxd5 Nxd5 10. Nxe5 Bxe5 11. Qxg4 a5 12. Na3 axb4 13. cxb4 Nxb4 14. Qg5 Qxg5+ 15. Kh1 Qg4 16. Rg1 Qxe4+ 17. Rg2 Nc2 18. h3 Nxa1 19. Bb2 Bxb2 20. f3 Qxf3 21. Kg1 Rxa3 22. d4 Rd8 23. h4 Rxd4 24. h5 Rd1+ 25. Kh2 Be5+ 26. Rg3 Bxg3+ 0-1"
  const movePattern = /\b([a-h][1-8]|O-O(?:-O)?|[NBRQK][a-h1-8]?x?[a-h][1-8](?:\+|#)?)\b/g;
  const temp = game.match(movePattern);
  const moves = temp || [];
  return  moves;
}

const moves = getMoves();

function nextMove(moveIndex:number){
  const currentMove=moves[moveIndex];
  return currentMove;
}

export{
  initBoard,
  nextMove,
  initBoolBoard,
}
