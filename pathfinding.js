const NO_ONE = 0;
const BY_A = 1;
const BY_B = 2;

function generateVisited(maze) {
  const visited = [];
  for (let y = 0; y < maze.length; y++) {
    const yAxis = [];
    for (let x = 0; x < maze[y].length; x++) {
      const coordinate = {
        closed: maze[y][x] === 1,
        length: 0,
        openedBy: NO_ONE,
        x,
        y,
      };
      yAxis.push(coordinate);
    }
    visited.push(yAxis);
  }
  return visited;
}

function findShortestPathLength(maze, [xA, yA], [xB, yB]) {
  const visited = generateVisited(maze);
  visited[yA][xA].openedBy = BY_A;
  visited[yB][xB].openedBy = BY_B;

  let aQueue = [visited[yA][xA]];
  let bQueue = [visited[yB][xB]];
  let iteration = 0;

  while (aQueue.length && bQueue.length) {
    iteration++;

    //gather a neighbors
    let aNeighbors = [];
    while (aQueue.length) {
      const coordinate = aQueue.shift();
      aNeighbors = aNeighbors.concat(
        getNeighbors(visited, coordinate.x, coordinate.y)
      );
    }

    // process a neighbors
    for (let i = 0; i < aNeighbors.length; i++) {
      const neighbor = aNeighbors[i];
      if (neighbor.openedBy === BY_B) {
        return neighbor.length + iteration;
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_A;
        aQueue.push(neighbor);
      }
    }

    //gather b neighbors
    let bNeighbors = [];
    while (bQueue.length) {
      const coordinate = bQueue.shift();
      bNeighbors = bNeighbors.concat(
        getNeighbors(visited, coordinate.x, coordinate.y)
      );
    }

    // process b neighbors
    for (let i = 0; i < bNeighbors.length; i++) {
      const neighbor = bNeighbors[i];
      if (neighbor.openedBy === BY_A) {
        return neighbor.length + iteration;
      } else if (neighbor.openedBy === NO_ONE) {
        neighbor.length = iteration;
        neighbor.openedBy = BY_B;
        bQueue.push(neighbor);
      }
    }
    // logMaze(visited);
  }

  // console.log(visited);

  return -1;
}

function getNeighbors(visited, x, y) {
  const neighbors = [];

  if (y - 1 >= 0 && !visited[y - 1][x].closed) {
    //left
    neighbors.push(visited[y - 1][x]);
  }
  if (y + 1 < visited[0].length && !visited[y + 1][x].closed) {
    //right
    neighbors.push(visited[y + 1][x]);
  }
  if (x - 1 >= 0 && !visited[y][x - 1].closed) {
    // up
    neighbors.push(visited[y][x - 1]);
  }
  if (x + 1 < visited.length && !visited[y][x + 1].closed) {
    // down
    neighbors.push(visited[y][x + 1]);
  }

  return neighbors;
}
