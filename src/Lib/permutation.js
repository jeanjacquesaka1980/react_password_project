import React from 'react';

export const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const emptyArray = [];

const result = numbersArray.map(int => {
    int.map(int => {
        return emptyArray.push(int);
    })
})

console.log(emptyArray)