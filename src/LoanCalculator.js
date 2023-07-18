import React, { useState } from 'react';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalPayment, setTotalPayment] = useState('');

  const calculateLoan = () => {
    if (loanAmount && interestRate && loanTerm) {
      const principal = parseFloat(loanAmount);
      const rate = parseFloat(interestRate) / 100 / 12;
      const term = parseFloat(loanTerm);

      const monthlyRate = Math.pow(1 + rate, term);
      const monthlyPayment = (principal * monthlyRate * rate) / (monthlyRate - 1);
      const totalPayment = monthlyPayment * term;

      setMonthlyPayment(monthlyPayment.toFixed(2));
      setTotalPayment(totalPayment.toFixed(2));
    }
  };

  return (
    <div>
      <h3>Loan Calculator</h3>
      <form>
        <div>
          <label htmlFor="loanAmount">Loan Amount:</label>
          <input
            type="number"
            id="loanAmount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="interestRate">Interest Rate (%):</label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="loanTerm">Loan Term (months):</label>
          <input
            type="number"
            id="loanTerm"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>
        <button type="button" onClick={calculateLoan}>
          Calculate
        </button>
      </form>
      {monthlyPayment && totalPayment && (
        <div>
          <h4>Monthly Payment: ${monthlyPayment}</h4>
          <h4>Total Payment: ${totalPayment}</h4>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;
