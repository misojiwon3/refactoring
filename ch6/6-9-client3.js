import { acquireReading } from './6-9.js';

const reading = acquireReading();

// function calculateBaseCharge(reading) {
//   return baseRate(reading.month, reading.year) * reading.quantity;
// }

const basicChargeAmount = reading.baseCharge;
