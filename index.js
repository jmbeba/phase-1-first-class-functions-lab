// Code your solution in this file!
const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(arr.length-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (mul) => {
    return function(val){
        return mul * val;
    }
}

const fareDoubler = (fare) => {
    return fare * 2;
}

const fareTripler = (fare) => {
    return fare * 3;
}

const selectDifferentDrivers = (arr, fn) => {
    return fn(arr);
}