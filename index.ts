#! /usr/bin/env node
import inquirer from "inquirer";

const answer :{
    sentences:string
} = await inquirer.prompt({
    name : "sentences",
    type : "input",
    message : "Enter your sentence to count the words:"
})

const words = answer.sentences.trim().split(" ")
console.log(words)
console.log(`There are ${words.length} words in your sentences.`)