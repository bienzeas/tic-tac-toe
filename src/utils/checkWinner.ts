export default function checkWinner(moves: number[]): number[] {
  const lines = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (const line of lines) {
    const count = line.filter((n) => moves.includes(n)).length;
    if (count === 3) return line;
  }

  return [];
}
