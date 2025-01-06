const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(direct = true) {
    this.direct = direct; // true - прямой, false - обратный
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase(); // Преобразуем сообщение в верхний регистр
    key = key.toUpperCase(); // Преобразуем ключ в верхний регистр

    let result = '';
    let j = 0; // Индекс для ключа
    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (/[A-Z]/.test(char)) { // Если символ является буквой
        const m = char.charCodeAt(0) - 'A'.charCodeAt(0); // Индекс символа в алфавите
        const k = key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0); // Индекс символа из ключа
        const encryptedChar = String.fromCharCode(((m + k) % 26) + 'A'.charCodeAt(0)); // Шифруем символ
        result += encryptedChar;

        j++; // Увеличиваем индекс для ключа
      } else {
        result += char; // Если не буква, добавляем символ как есть
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase(); // Преобразуем сообщение в верхний регистр
    key = key.toUpperCase(); // Преобразуем ключ в верхний регистр

    let result = '';
    let j = 0; // Индекс для ключа
    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (/[A-Z]/.test(char)) { // Если символ является буквой
        const m = char.charCodeAt(0) - 'A'.charCodeAt(0); // Индекс символа в алфавите
        const k = key[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0); // Индекс символа из ключа
        const decryptedChar = String.fromCharCode(((m - k + 26) % 26) + 'A'.charCodeAt(0)); // Расшифровываем символ
        result += decryptedChar;

        j++; // Увеличиваем индекс для ключа
      } else {
        result += char; // Если не буква, добавляем символ как есть
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
