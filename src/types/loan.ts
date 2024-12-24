export type BorrowerType = 'public_service' | 'citizen';

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  phone: string;
  currentBalance: number;
}

export interface LoanApplication {
  id: string;
  applicantId: string;
  personalInfo: PersonalInfo;
  amount: number;
  term: number;
  purpose: string;
  creditScore: number;
  weeklyIncome: number;
  borrowerType: BorrowerType;
  collateralType: 'property' | 'vehicle' | 'savings';
  collateralValue: number;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  documents: {
    idCard: string;
    incomeProof: string;
    collateralProof: string;
  };
}

export interface LoanCalculation {
  weeklyPayment: number;
  totalInterest: number;
  totalAmount: number;
  debtRatio: number;
  isEligible: boolean;
  interestRate: number;
  requiredDeposit: number;
  simulationFee: number;
  netLoanAmount: number;
}

export const LOAN_LIMITS = {
  public_service: 150000,
  citizen: 100000
} as const;

export const LOAN_CONSTANTS = {
  MINIMUM_DEPOSIT_RATE: 0.15, // 15%
  SIMULATION_FEE: 2500
} as const;