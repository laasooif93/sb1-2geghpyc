import { BorrowerType, LOAN_LIMITS, LOAN_CONSTANTS } from '../types/loan';

export function calculateInterestRate(amount: number, borrowerType: BorrowerType): number {
  const baseRate = amount <= 10000 ? 0.10 : 0.06;
  const minRate = borrowerType === 'public_service' ? 0.08 : 0.10;
  
  return Math.max(baseRate, minRate);
}

export function calculateLoanDetails(amount: number, term: number, weeklyIncome: number, borrowerType: BorrowerType = 'citizen') {
  const interestRate = calculateInterestRate(amount, borrowerType);
  const requiredDeposit = amount * LOAN_CONSTANTS.MINIMUM_DEPOSIT_RATE;
  const netLoanAmount = amount - requiredDeposit;
  
  const totalInterest = netLoanAmount * interestRate;
  const totalAmount = netLoanAmount + totalInterest + LOAN_CONSTANTS.SIMULATION_FEE;
  const weeklyPayment = totalAmount / term;
  const debtRatio = (weeklyPayment / weeklyIncome) * 100;
  
  return {
    weeklyPayment,
    totalInterest,
    totalAmount,
    debtRatio,
    isEligible: debtRatio <= 35 && weeklyPayment * 1.5 <= weeklyIncome && amount <= LOAN_LIMITS[borrowerType],
    interestRate,
    requiredDeposit,
    simulationFee: LOAN_CONSTANTS.SIMULATION_FEE,
    netLoanAmount
  };
}