// Code your solution here:

let driversWithRevenueOver = (drivers, rev) => {
    return drivers.filter(driver => driver.revenue > rev);
}

let driverNamesWithRevenueOver = (drivers, rev) => {
    return driversWithRevenueOver(drivers,rev).map(driver => driver.name);
}

let exactMatch = (drivers, object) => {
    key = Object.keys(object)[0]
    return drivers.filter(driver => driver[key] === object[key]);
}

let exactMatchToList = (drivers, object) => {
    return exactMatch(drivers, object).map(driver => driver.name);
}