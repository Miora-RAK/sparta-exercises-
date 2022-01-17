function canTakeArtPieces(pieces) {
  return pieces.every((onePiece) => onePiece.type === "painting");
}

canTakeArtPieces(
  [
    {piece: "Mona Lisa", type: "painting"},
    {piece: "Guernica", type: "painting"}
  ]
);


// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
