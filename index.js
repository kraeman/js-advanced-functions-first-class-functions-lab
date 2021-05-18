// Code your solution in this file!
const returnFirstTwoDrivers = (a) => {
    return a.slice(0, 2)
}

const returnLastTwoDrivers = (a) => {
    return a.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (d) => {
    const thing = (a) => {
        return d * a
    }

    return thing
}

const fareDoubler = (f) => {
    return createFareMultiplier(2)(f)
}

const fareTripler =  (f) => {
    return createFareMultiplier(3)(f)
}

const selectDifferentDrivers = (arrayOfDrivers, fu) => {
    return fu(arrayOfDrivers)
}