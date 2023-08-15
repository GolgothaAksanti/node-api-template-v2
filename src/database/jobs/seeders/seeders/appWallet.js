/* eslint-disable @typescript-eslint/no-var-requires */
const data = require('../data/app/appWallet');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('app_wallets', data, {}),

  down: queryInterface => queryInterface.bulkDelete('app_wallets', null, {}),
};
