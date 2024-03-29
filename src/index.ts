const scripts = {
    "clean": "rm -rf dist",
    "start": "npm run clean && tsc && node dist/index.js",
    "singleton": "npm run clean && tsc && node dist/singleton-pattern/index.js",
    "command": "npm run clean && tsc && node dist/command-pattern/index.js",
    "facade": "npm run clean && tsc && node dist/facade-pattern/index.js",
    "dao": "npm run clean && tsc && node dist/dao-pattern/index.js",
    "factory-method": "npm run clean && tsc && node dist/factory-method-pattern/index.js",
    "abstract-factory": "npm run clean && tsc && node dist/abstract-factory-pattern/index.js",
    "decorator": "npm run clean && tsc && node dist/decorator-pattern/index.js",
    "observer": "npm run clean && tsc && node dist/observer-pattern/index.js",
    "state": "npm run clean && tsc && node dist/state-pattern/index.js",
    "strategy": "npm run clean && tsc && node dist/strategy-pattern/index.js",
    "bridge": "npm run clean && tsc && node dist/bridge-pattern/index.js",
    "builder": "npm run clean && tsc && node dist/builder-pattern/index.js",
    "chain-of-responsibility": "npm run clean && tsc && node dist/chain-of-responsibility-pattern/index.js",
    "proxy": "npm run clean && tsc && node dist/proxy-pattern/index.js",
    "memento": "npm run clean && tsc && node dist/memento-pattern/index.js",
    "visitor": "npm run clean && tsc && node dist/visitor-pattern/index.js",
    "flyweight": "npm run clean && tsc && node dist/flyweight-pattern/index.js",
    "interpreter": "npm run clean && tsc && node dist/interpreter-pattern/index.js",
    "iterator": "npm run clean && tsc && node dist/iterator-pattern/index.js",
    "mediator": "npm run clean && tsc && node dist/mediator-pattern/index.js",
    "template-method": "npm run clean && tsc && node dist/template-method-pattern/index.js"
};

// print the available scripts
console.log(scripts);
