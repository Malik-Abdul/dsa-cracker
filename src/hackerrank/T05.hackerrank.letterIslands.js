// https://www.hackerrank.com/challenges/letter-islands/problem?isFullScreen=true

const letterIslands = (s, k) => {
  const allSubstrings = [];

  function findPositions(sub) {
    const positions = [];
    let pos = s.indexOf(sub);
    while (pos !== -1) {
      positions.push(pos);
      pos = s.indexOf(sub, pos + 1); // find next occurrence
    }
    return positions;
  }
  function countIslandsForPositions(positions) {
    if (positions.length === 0) return 0;
    let islands = 1;
    for (let i = 1; i < positions.length; i++) {
      if (positions[i] > positions[i - 1] + 1) {
        islands++; // A new island is formed when positions are not contiguous
      }
    }
    return islands;
  }
  for (let n = 0; n < s.length; n++) {
    let eachSubs = "";
    for (let j = n; j < s.length; j++) {
      eachSubs += s[j];
      allSubstrings.push(eachSubs);
    }
  }
  x;
  let result = 0;

  for (k of allSubstrings) {
    console.log("k ===> ", k);
    const positions = findPositions(k);
    // console.log("position ===> ", positions);
    const islandCount = countIslandsForPositions(positions);
    if (islandCount === k) {
      result++;
    }
    return result;
  }
  // console.log(allSubstrings);

  let subsCounterExist = 0;
  // for (let substring in countSubs) {
  //   if (countSubs[substring] == 2) {
  //     console.log(`${substring}: ${countSubs[substring]}`);
  //     // subsCounterExist++;
  //   }
  // }
  return subsCounterExist;
};

// console.log(letterIslands("abaab", 2));
console.log(letterIslands("ababaewabaq", 2));
