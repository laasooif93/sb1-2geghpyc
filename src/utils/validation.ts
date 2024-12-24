import { LOAN_LIMITS, BorrowerType } from '../types/loan';

export function validateAmount(amount: number, limit: number = LOAN_LIMITS.citizen): string | null {
  if (amount <= 0) return "Le montant doit être supérieur à 0";
  if (amount > limit) return `Le montant maximum est de ${limit.toLocaleString()} $`;
  return null;
}

export function validateTerm(term: number, amount: number): string | null {
  if (term <= 0) return "La durée doit être supérieure à 0";
  if (amount <= 10000 && term > 3) return "La durée maximum est de 3 semaines pour les prêts ≤ 10 000 $";
  if (amount > 10000 && term > 7) return "La durée maximum est de 7 semaines pour les prêts > 10 000 $";
  return null;
}

export function validateIncome(income: number, weeklyPayment: number): string | null {
  if (income < weeklyPayment * 1.5) return "Le revenu doit être au moins 1,5 fois supérieur au paiement hebdomadaire";
  return null;
}

export function validateCollateral(collateralValue: number, loanAmount: number): string | null {
  if (collateralValue < loanAmount * 0.5) return "La garantie doit couvrir au moins 50% du montant du prêt";
  return null;
}