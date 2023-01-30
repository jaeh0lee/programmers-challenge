function solution(hp) {
  let boss = 5;
  let middle = 3;
  let bottom = 1;
  return (
    Math.floor(hp / boss) +
    Math.floor((hp % boss) / middle) +
    Math.floor((hp % boss) % middle)
  );
}
