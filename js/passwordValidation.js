function isPasswordValid(password) {
  if(!password) return false;
  if(password.length < 8) return false;

  const lowerCharacters = "abcdefghijklmnopqrstuvwxyz"; 
  const upperCharacters = lowerCharacters.toUpperCase();
  const specialCharacters = "@#$%^&*!";
  const numbers = "0123456789";
  let specialCharacterCount = 0,
  lowerCharacterCount = 0,
  upperCharacterCount = 0;
  digitCount = 0;
  for(const temp of [...password]) {
    if([...specialCharacters].includes(temp)) specialCharacterCount++;
    if([...lowerCharacters].includes(temp)) lowerCharacterCount++;
    if([...upperCharacters].includes(temp)) upperCharacterCount++;
    if([...numbers].includes(temp)) digitCount++;
  }

  if(specialCharacterCount <= 0 ||
    lowerCharacterCount <= 0 ||
    upperCharacterCount <= 0 ||
    digitCount <= 0) return false;

  return true;
}

module.exports = isPasswordValid
