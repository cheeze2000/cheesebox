const { readFileSync, readdirSync, writeFileSync } = require("fs");
const { join } = require("path");
const { minify } = require("uglify-js");

const files = readdirSync("src");
for (const file of files) {
  const contents = readFileSync(join("src", file), "utf8");
  const result = minify(contents.replace(/module\.exports.+/, ""));
  writeFileSync(join("build", file.replace(/js$/, "min.js")), result.code + "\n");
}
