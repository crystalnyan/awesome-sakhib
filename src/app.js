#!/usr/bin/env node

import data from './data.js';
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const app = async () => {
  let words = data[Math.floor(Math.random() * data.length)]
  const rainbowTitle = chalkAnimation.rainbow("awesome-sakhib");
  await sleep();
  rainbowTitle.stop();
  console.log(`
    ${chalk.blue.bold(words)}
    `);
};

await app();
