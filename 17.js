function countPackages(carriers, carrierID) {
  const carriersInfo = {};
  carriers.forEach(
    (carrier) =>
      (carriersInfo[carrier[0]] = {
        packages: carrier[1],
        employees: carrier[2],
      })
  );
  let packages = 0;
  const getPackages = (carrier) => {
    const carrierData = carriersInfo[carrier];
    packages += carrierData.packages;
    if (carrierData.employees.length) {
      carrierData.employees.forEach((employee) => getPackages(employee));
    }
  };
  getPackages(carrierID);
  return packages;
}

const carriers = [
  ["dapelu", 5, ["midu", "jelowing"]],
  ["midu", 2, []],
  ["jelowing", 2, []],
];

const quantity1 = countPackages(carriers, "dapelu"); // 9
console.log(quantity1);
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ["lolivier", 8, ["camila", "jesuspoleo"]],
  ["camila", 5, ["sergiomartinez", "conchaasensio"]],
  ["jesuspoleo", 4, []],
  ["sergiomartinez", 4, []],
  ["conchaasensio", 3, ["facundocapua", "faviola"]],
  ["facundocapua", 2, []],
  ["faviola", 1, []],
];

const quantity2 = countPackages(carriers2, "camila"); // 15
console.log(quantity2);
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
