function daysToXmas(date) {
  const xmas = new Date("Dec 25, 2021 00:00:00");
  const timeDiff = xmas.getTime() - date.getTime();
  const daysUntilXmas = timeDiff / 1000 / 60 / 60 / 24;
  return Math.ceil(daysUntilXmas);
}

const date1 = new Date("Dec 1, 2021");
const days = daysToXmas(date1); // 24
console.log(days);
