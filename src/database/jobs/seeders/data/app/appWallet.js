/* eslint-disable @typescript-eslint/no-var-requires */
const moment = require('moment');

const currentDate = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');

module.exports = [
  {
    app_wallet_id: 1,
    type: 'initial',
    amount: 10000,
    createdAt: currentDate,
    updatedAt: currentDate,
  },
];
