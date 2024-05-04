export default function winCrossOrientation(winCoord: Array<number>) {
  switch (true) {
    // 1-4-7
    case winCoord[0] === 1 && winCoord[1] === 4 && winCoord[2] === 7:
      return {
        x1: "33.5",
        y1: "10",
        x2: "33.5",
        y2: "190",
      };
    // 7-4-1
    case winCoord[0] === 7 && winCoord[1] === 4 && winCoord[2] === 1:
      return {
        x1: "33.5",
        y1: "190",
        x2: "33.5",
        y2: "10",
      };
    // 2-5-8
    case winCoord[0] === 2 && winCoord[1] === 5 && winCoord[2] === 8:
      return {
        x1: "100",
        y1: "10",
        x2: "100",
        y2: "190",
      };
    // 8-5-2
    case winCoord[0] === 8 && winCoord[1] === 5 && winCoord[2] === 2:
      return {
        x1: "100",
        y1: "190",
        x2: "100",
        y2: "10",
      };
    // 3-6-9
    case winCoord[0] === 3 && winCoord[1] === 6 && winCoord[2] === 9:
      return {
        x1: "166.5",
        y1: "10",
        x2: "166.5",
        y2: "190",
      };
    // 9-6-3
    case winCoord[0] === 9 && winCoord[1] === 6 && winCoord[2] === 3:
      return {
        x1: "166.5",
        y1: "190",
        x2: "166.5",
        y2: "10",
      };

    // 1-2-3
    case winCoord[0] === 1 && winCoord[1] === 2 && winCoord[2] === 3:
      return {
        x1: "10",
        y1: "33.5",
        x2: "190",
        y2: "33.5",
      };
    // 3-2-1
    case winCoord[0] === 3 && winCoord[1] === 2 && winCoord[2] === 1:
      return {
        x1: "190",
        y1: "33.5",
        x2: "10",
        y2: "33.5",
      };
    // 4-5-6
    case winCoord[0] === 4 && winCoord[1] === 5 && winCoord[2] === 6:
      return {
        x1: "10",
        y1: "100",
        x2: "190",
        y2: "100",
      };

    // 6-5-4
    case winCoord[0] === 6 && winCoord[1] === 5 && winCoord[2] === 4:
      return {
        x1: "190",
        y1: "100",
        x2: "10",
        y2: "100",
      };
    // 7-8-9
    case winCoord[0] === 7 && winCoord[1] === 8 && winCoord[2] === 9:
      return {
        x1: "10",
        y1: "166.5",
        x2: "190",
        y2: "166.5",
      };

    // 9-8-7
    case winCoord[0] === 9 && winCoord[1] === 8 && winCoord[2] === 7:
      return {
        x1: "190",
        y1: "166.5",
        x2: "10",
        y2: "166.5",
      };
    // 1-5-9
    case winCoord[0] === 1 && winCoord[1] === 5 && winCoord[2] === 9:
      return {
        x1: "10",
        y1: "10",
        x2: "190",
        y2: "190",
      };
    // 9-5-1
    case winCoord[0] === 9 && winCoord[1] === 5 && winCoord[2] === 1:
      return {
        x1: "190",
        y1: "190",
        x2: "10",
        y2: "10",
      };
    // 3-5-7
    case winCoord[0] === 3 && winCoord[1] === 5 && winCoord[2] === 7:
      return {
        x1: "190",
        y1: "10",
        x2: "10",
        y2: "190",
      };
    // 7-5-3
    case winCoord[0] === 7 && winCoord[1] === 5 && winCoord[2] === 3:
      return {
        x1: "10",
        y1: "190",
        x2: "190",
        y2: "10",
      };
    default:
      return null;
  }
}
