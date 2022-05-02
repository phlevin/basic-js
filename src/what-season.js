const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let now = new Date(date);
  let month = now.getMonth();
  // console.log(now);
  // console.log(month);
  // return month;
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (month === (11 || 0 || 1)) {
    return 'winter'
  } else if (month === 2 || month === 3 || month === 4) {
    return 'spring'
  } else if (month === 5 || month === 6 || month === 7) {
    return 'summer'
  } else if (month === 8 || month === 9 || month === 10) {
    return 'autumn'
  } else {
    throw new Error('Invalid date!');
  }
  
}

module.exports = {
  getSeason
};


// console.log(getSeason(new Date(1900, 1, 22, 23, 45, 11, 500)));
