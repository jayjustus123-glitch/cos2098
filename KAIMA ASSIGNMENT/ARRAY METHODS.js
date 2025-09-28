const scores = [30, 50, 70, 90];

// map
const doubled = scores.map(score => score * 2);

// filter
const passed = scores.filter(score => score >= 50);

// reduce
const total = scores.reduce((sum, score) => sum + score, 0);

console.log({ doubled, passed, total });