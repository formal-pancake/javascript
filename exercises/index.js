import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import inquirer from 'inquirer';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function executeScript(exerciseName) {
    if (!exerciseName) {
        const exercises = getAvailableExercises();

        const answers = await inquirer.prompt([
            {
                name: 'exercises',
                type: 'list',
                message: 'Exercises:',
                choices: exercises
            }
        ]);

        executeScript(answers.exercises);
    } else {
        const scriptPath = path.join(__dirname, exerciseName, 'index.js');
        if (!fs.existsSync(scriptPath)) {
            console.log(chalk.red(`Erreur: Le script "${exerciseName}" n'a pas été trouver`));
        } else {
            console.log(chalk.yellow(`Execution de "${exerciseName}"...`));
            try {
                await import("file://" + scriptPath);
            } catch (err) {
                console.log(chalk.red("Une erreur est survenue:", err));
            }
        }
    }
}

function getAvailableExercises() {
    const exerciseDirectories = fs.readdirSync(__dirname, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
    return exerciseDirectories;
}

// function getUserInput(prompt) {
//     const readlineSync = require('readline-sync');
//     return readlineSync.questionInt(prompt);
// }

executeScript(process.argv[2]);