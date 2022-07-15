function helpFn() {
  console.log(` List of all commands -
                             Tree Command --> node main.js tree <dirPath>
                             Organize Command --> node main.js organize <dirname>
                             Help Command --> node main.js help`);
}

module.exports = {
  helpFnKey: helpFn,
};