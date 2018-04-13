var chalk = require("chalk");


// var message = "Hello " + chalk.yellow("World");
// console.log(message);

console.log(chalk.blue("Hello") + ' World' + chalk.red('!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz' ));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

console.log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
    ));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);