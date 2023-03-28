const scripts = {
  clean: "rm -rf dist",
  start: "npm run clean && tsc && node dist/index.js",
  singleton: "npm run clean && tsc && node dist/singleton-pattern/index.js",
  command: "npm run clean && tsc && node dist/command-pattern/index.js",
  facade: "npm run clean && tsc && node dist/facade-pattern/index.js",
  dao: "npm run clean && tsc && node dist/dao-pattern/index.js",
  "factory-method":
    "npm run clean && tsc && node dist/factory-method-pattern/index.js",
  "abstract-factory":
    "npm run clean && tsc && node dist/abstract-factory-pattern/index.js",
  "decorator-pattern":
    "npm run clean && tsc && node dist/decorator-pattern/index.js",
  "observer-pattern":
    "npm run clean && tsc && node dist/observer-pattern/index.js",
  "state-pattern": "npm run clean && tsc && node dist/state-pattern/index.js",
  "strategy-pattern":
    "npm run clean && tsc && node dist/strategy-pattern/index.js",
};

// print the available scripts
console.log(scripts);
