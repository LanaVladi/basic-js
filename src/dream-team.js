const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members) || !isNaN(members) || members === 0 || members === null || members === undefined || members === false) {
      // console.log('!isNaN(members) :', !isNaN(members));
      // console.log('members === false :', members === false);
      // console.log('members === undefined :', members === undefined);
      // console.log('members === null :', members === null);
      // console.log('members === 0 :', members === 0);
      // console.log('typeof members == \'object\' :', typeof members == 'object');
      return false;
      // console.log('false :', false);
  } else {
      let arrFirstLetters = [];
      for (let i = 0; i < members.length; i++) {
          if (typeof members[i] === 'string') {
              // console.log('members[i] :', members[i]);
              // console.log('typeof members[i] :', typeof members[i]);
              let arrMember = members[i].replace(/\s+/g, '').toUpperCase().split(' ');
              //  console.log('arrMember :', arrMember);
              arrMember.map(firstLetter => arrFirstLetters.push(firstLetter[0]));
              arrFirstLetters.sort().join('');
              // console.log(' arrFirstLetters.sort().join(\'\') :',  arrFirstLetters.sort().join(''));
          }
      }
      return arrFirstLetters.sort().join('');
  }
}

module.exports = {
  createDreamTeam
};
