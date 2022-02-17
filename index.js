const swapNum = (num, x, y) => {
const temp = num[x];
num[x] = num[y];
num[y] = temp;
};

const shuffle = (num) => {
console.log("Input = ", num.join(","));

for (let i = 1; i < num.length - 1; i += 2)
swapNum(num, i, i + 1);

return num;
};

console.log("Output = ", shuffle([2, 1, 5, 3, 11, 7]).join(","));
