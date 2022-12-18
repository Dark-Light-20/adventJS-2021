function fixFiles(files) {
  const fixed = [];
  const repeated = {};
  const names = new Set(files);
  names.forEach((name) => (repeated[name] = 0));
  files.forEach((file) => {
    if (!repeated[file]) {
      fixed.push(file);
    } else {
      fixed.push(`${file}(${repeated[file]})`);
    }
    repeated[file] = ++repeated[file];
  });
  return fixed;
}

const files = ["photo", "postcard", "photo", "photo", "video"];
const fixed = fixFiles(files); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
console.log(fixed);
