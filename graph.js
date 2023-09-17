import { getUser, getMe } from "./jobs.js";

// you work for a professional social network. in this social network, a professional
// can follow other people to see their updates (think Twitter for professionals.)
// write a function that finds the job `title` that shows up most frequently given
// a set of degree of separation from you. count the initial id's own job title in the total

/*
  parameters:
  myId                - number    - the id of the user who is the root node
  
  degreesOfSeparation - number   - how many degrees of separation away to look on the graph
*/

/*
  getUser  - function - a function that returns a user's object given an ID

  example

  {
    id: 308,
    name: "Beatrisa Lalor",
    company: "Youtags",
    title: "Office Assistant II",
    connections: [687, 997, 437]
  }
*/

const findMostCommonTitle = (myId, degreesOfSeparation) => {
  const me = getUser(myId);

  let queue = [myId, ...me.connections];
  let newQueue = [];
  let counted = [];
  const titles = {};

  for (let i = 0; i < degreesOfSeparation; i++) {
    queue.forEach((el) => {
      const worker = getUser(el);
      if (titles[worker.title]) titles[worker.title] += 1;
      else titles[worker.title] = 1;

      worker.connections.forEach((elem) => {
        if (
          counted.includes(elem) ||
          queue.includes(elem) ||
          newQueue.includes(elem)
        )
          return;
        else newQueue.push(elem);
      });
    });

    counted.push(...queue);
    queue = [...newQueue];
    newQueue = [];
  }

  const res = Object.entries(titles).sort((a, b) => b[1] - a[1])[0][0];
  console.log(titles, "professions");
  console.log(res, "result");
  console.log(counted.length);
  console.log(new Set(counted));
  return res;
};

// unit tests
// do not modify the below code
function test1() {
  // the getUser function and data comes from this CodePen: https://codepen.io/btholt/pen/NXJGwa?editors=0010
  console.log(
    "user 30 with 2 degrees of separation: ",
    // findMostCommonTitle(30, 2),
    "librarian"
  );

  console.log(
    "user 11 with 3 degrees of separation: ",

    // findMostCommonTitle(11, 3),
    "Graphic designer"
  );

  console.log(
    "user 307 with 4 degrees of separation: ",

    // if you're failing here with "Clinical Specialist, you're probably not filtering users who
    // appear more than once in people's connections
    // findMostCommonTitle(306, 4),
    "Pharmacist"
  );
}
test1();

function test2() {
  console.log(
    "user 1 with 7 degrees of separation – this will traverse every user that's followed by someone else. five users are unfollowed: ",

    findMostCommonTitle(1, 7),
    "Geological Engineer"
  );
}
test2();
