'use strict';

var _ = require('lodash');

var ClientError = require('./clienterror');

var errors = {
  BAD_SIGNATURES: 'Bad signatures',
  COPAYER_DATA_MISMATCH: 'Copayer data mismatch',
  COPAYER_IN_WALLET: 'Copayer already in wallet',
  COPAYER_REGISTERED: 'Copayer ID already registered on server',
  COPAYER_VOTED: 'Copayer already voted on this transaction proposal',
  DUST_AMOUNT: 'Amount below dust threshold',
  INCORRECT_ADDRESS_NETWORK: 'Incorrect address network',
  INSUFFICIENT_FUNDS: 'Insufficient funds',
  INSUFFICIENT_FUNDS_INSTANT_SEND: 'Insufficient funds for instant transaction, if some transactions are pending confirmation, retry later',
  INSUFFICIENT_CONFIRMATIONS: 'InstantSend requires that all inputs have 6+ confirmations. Please wait a few minutes and try again.',
  INSUFFICIENT_FUNDS_FOR_FEE: 'Insufficient funds for fee',
  INSUFFICIENT_FUNDS_FOR_FEE_INSTANT_SEND: 'Insufficient funds for fee for instant confirmation,if some transactions are pending confirmation, retry later',
  INVALID_ADDRESS: 'Invalid address',
  INVALID_CHANGE_ADDRESS: 'Invalid change address',
  KEY_IN_COPAYER: 'Key already registered',
  LOCKED_FUNDS: 'Funds are locked by pending transaction proposals',
  HISTORY_LIMIT_EXCEEDED: 'Requested page limit is above allowed maximum',
  MAIN_ADDRESS_GAP_REACHED: 'Maximum number of consecutive addresses without activity reached',
  NOT_AUTHORIZED: 'Not authorized',
  TOO_MANY_KEYS: 'Too many keys registered',
  TX_ALREADY_BROADCASTED: 'The transaction proposal is already broadcasted',
  TX_CANNOT_CREATE: 'Cannot create TX proposal during backoff time',
  TX_CANNOT_REMOVE: 'Cannot remove this tx proposal during locktime',
  TX_MAX_SIZE_EXCEEDED: 'TX exceeds maximum allowed size',
  TX_NOT_ACCEPTED: 'The transaction proposal is not accepted',
  TX_NOT_FOUND: 'Transaction proposal not found',
  TX_NOT_PENDING: 'The transaction proposal is not pending',
  UNAVAILABLE_UTXOS: 'Unavailable unspent outputs',
  UPGRADE_NEEDED: 'Client app needs to be upgraded',
  WALLET_ALREADY_EXISTS: 'Wallet already exists',
  WALLET_FULL: 'Wallet full',
  WALLET_BUSY: 'Wallet is busy, try later',
  WALLET_NOT_COMPLETE: 'Wallet is not complete',
  WALLET_NOT_FOUND: 'Wallet not found',
};

var errorObjects = _.zipObject(_.map(errors, function(msg, code) {
  return [code, new ClientError(code, msg)];
}));

errorObjects.codes = _.mapValues(errors, function(v, k) {
  return k;
});

module.exports = errorObjects;
