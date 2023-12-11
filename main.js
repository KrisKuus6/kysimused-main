import inquirer from 'inquirer';

const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'list',
      name: 'list',
      message: 'Mis sa teed:',
      choices: ['söön', 'joon', 'magan', 'istun'],
    },
  ])
  .then((answers) => {
    console.log(`You selected ${answers.list}.`);
  });
inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'rawlist',
      message: 'kui vana sa oled:',
      choices: ['15', '13', '12', '24'],
    },
  ])
  .then((answers) => {
    console.log(`You prefer ${answers.rawlist}.`);
  });
inquirer
  .prompt([
    {
      type: 'expand',
      name: 'expand',
      message: 'Choose an option:',
      choices: [
        {
          key: 'a',
          name: 'Option A',
          value: 'a',
        },
        {
          key: 'b',
          name: 'Option B',
          value: 'b',
        },
        {
          key: 'c',
          name: 'Option C',
          value: 'c',
        },
      ],
    },
  ])
  .then((answers) => {
    console.log(`You selected option ${answers.expand}.`);
  });
inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'checkbox',
      message: 'kuhu me lähme:',
      choices: ['kinno', 'jääme koju', 'poodi', 'kooli'],
    },
  ])
  .then((answers) => {
    console.log(`You selected: ${answers.checkbox.join(', ')}`);
  });
inquirer
  .prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure you want to continue?',
    },
  ])
  .then((answers) => {
    if (answers.confirm) {
      console.log('You chose to continue.');
    } else {
      console.log('You chose to cancel.');
    }
  });
inquirer
  .prompt([
    {
      type: 'input',
      name: 'input',
      message: 'Enter your name:',
    },
  ])
  .then((answers) => {
    console.log(`Your name is: ${answers.input}`);
  });
inquirer
  .prompt([
    {
      type: 'number',
      name: 'number',
      message: 'Enter your age:',
    },
  ])
  .then((answers) => {
    console.log(`Your age is: ${answers.number}`);
  });
inquirer
  .prompt([
    {
      type: 'password',
      name: 'password',
      message: 'Enter your secret password:',
    },
  ])
  .then((answers) => {
    console.log('Password entered.');
  });