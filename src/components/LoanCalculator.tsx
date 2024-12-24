import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';
import { calculateLoanDetails } from '../utils/loanCalculations';
import { validateAmount, validateTerm, validateIncome } from '../utils/validation';
import { BorrowerType, LOAN_LIMITS } from '../types/loan';
import LoanCalculatorForm from './calculator/LoanCalculatorForm';
import LoanCalculatorResult from './calculator/LoanCalculatorResult';

export default function LoanCalculator() {
  const [formData, setFormData] = useState({
    amount: 5000,
    term: 2,
    weeklyIncome: 1000,
    borrowerType: 'citizen' as BorrowerType
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [calculation, setCalculation] = useState<ReturnType<typeof calculateLoanDetails> | null>(null);

  const validateAndCalculate = () => {
    const newErrors: Record<string, string> = {};
    
    const amountLimit = LOAN_LIMITS[formData.borrowerType];
    const amountError = validateAmount(formData.amount, amountLimit);
    if (amountError) newErrors.amount = amountError;

    const termError = validateTerm(formData.term, formData.amount);
    if (termError) newErrors.term = termError;

    const result = calculateLoanDetails(formData.amount, formData.term, formData.weeklyIncome, formData.borrowerType);
    const incomeError = validateIncome(formData.weeklyIncome, result.weeklyPayment);
    if (incomeError) newErrors.weeklyIncome = incomeError;

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setCalculation(result);
    }
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  // Recalculer automatiquement lorsque les données du formulaire changent
  useEffect(() => {
    validateAndCalculate();
  }, [formData]);

  return (
    <div className="glass-effect rounded-lg shadow-xl p-6 border border-blue-100 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-6 h-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">Simulateur de Prêt</h2>
      </div>

      <LoanCalculatorForm
        {...formData}
        onChange={handleChange}
        onCalculate={validateAndCalculate}
        errors={errors}
      />

      {calculation && <LoanCalculatorResult calculation={calculation} />}
    </div>
  );
}