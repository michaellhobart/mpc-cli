#!/usr/bin/env node

const fs = require('fs');

const clientDirs = ["Artwork", "Packing Lists"],
artworkDirs = ["Mockups", "Originals", "Rev 1"]
// Grab provided args.

const arg2 = process.argv[2],
arg3 = process.argv[3],
arg4 = process.argv[4]

switch (arg2) {
  case "clidir":
    fs.mkdirSync(`./${arg3}`)
    process.chdir(`./${arg3}`)
    clientDirs.map(dir => fs.mkdirSync(dir))
    process.chdir(`./Artwork`)
    fs.mkdirSync(`./${arg4}`)
    process.chdir(`./${arg4}`)
    artworkDirs.map(dir => fs.mkdirSync(dir))
    process.chdir("Rev 1")
    fs.mkdirSync("Front")
    break;
  case "artdir":
    fs.mkdirSync(`./${arg3}`)
    process.chdir(`./${arg3}`)
    artworkDirs.map(dir => fs.mkdirSync(dir))
    process.chdir("Rev 1")
    fs.mkdirSync("Front")
    break;
  default:
    console.log("Must enter an argument");
}
