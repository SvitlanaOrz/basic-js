const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }
  encrypt(message, key) {
    // throw new NotImplementedError("Not implemented");

    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    const result = [];
    let j = 0;

    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const keyCode = key.charCodeAt(j % key.length) - 65;
        const encryptedCharCode = ((charCode - 65 + keyCode) % 26) + 65;
        result.push(String.fromCharCode(encryptedCharCode));
        j++;
      } else {
        result.push(message[i]);
      }
    }

    return this.reverse ? result.join("") : result.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    // throw new NotImplementedError("Not implemented");

    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    const result = [];
    let j = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const charCode = encryptedMessage.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const keyCode = key.charCodeAt(j % key.length) - 65;
        const decryptedCharCode = ((charCode - 65 - keyCode + 26) % 26) + 65;
        result.push(String.fromCharCode(decryptedCharCode));
        j++;
      } else {
        result.push(encryptedMessage[i]);
      }
    }

    return this.reverse ? result.join("") : result.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
