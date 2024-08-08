import Modal from "./Modal";
import { useState } from "react";

export default function LoanForm() {
  const [errorMessage, seterrorMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [LoanInput, setLoanInput] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(event) {
    event.preventDefault();
    seterrorMessage(null);
    const { age, phoneNumber } = LoanInput;
    if (age < 18 || age > 100) {
      seterrorMessage("Age must be between 18 and 100");
    } else if (phoneNumber.length < 10) {
      seterrorMessage("Phone number must be at least 10 digits");
    }
    setShowModal(true);
  }

  function handleDivClick() {
    if (showModal) {
      setShowModal(false);
    }
  }

  return (
    <div
      onClick={handleDivClick}
      className="flex flex-col justify-center items-center text-black "
    >
      <form className="flex flex-col bg-sky-900 text-white p-5 rounded-3xl shadow-xl w-[800px] ">
        <h1 className="text-3xl flex justify-center py-3">Requesting a Loan</h1>
        <hr />
        <label className="mt-3">Name:</label>
        <input
          value={LoanInput.name}
          onChange={(event) => {
            setLoanInput({ ...LoanInput, name: event.target.value });
          }}
          className="w-full text-black h-[30px] border-none "
        />

        <label className="mt-3">Phone Number:</label>
        <input
          value={LoanInput.phoneNumber}
          onChange={(event) => {
            setLoanInput({ ...LoanInput, phoneNumber: event.target.value });
          }}
          className="w-full text-black h-[30px] border-none "
        />

        <label className="mt-3">Age:</label>
        <input
          value={LoanInput.age}
          onChange={(event) => {
            setLoanInput({ ...LoanInput, age: event.target.value });
          }}
          className="w-full text-black h-[30px] border-none "
        />

        <label className="mt-3 text-center">Are you employee?</label>
        <input
          type="checkbox"
          value={LoanInput.isEmployee}
          onChange={(event) => {
            setLoanInput({ ...LoanInput, isEmployee: event.target.checked });
          }}
          className="w-full h-[30px] border-none "
        />

        <label className="mt-3">Salary:</label>
        <select
          value={LoanInput.salaryRange}
          onChange={(event) => {
            setLoanInput({ ...LoanInput, salaryRange: event.target.value });
          }}
          className="w-full h-[30px] border-none "
        >
          <option>less than 500$</option>
          <option>500-2000$</option>
          <option>above 2000$</option>
        </select>
        <div className="flex justify-center items-center">
          <button
            disabled={
              LoanInput.name == "" ||
              LoanInput.phoneNumber == "" ||
              LoanInput.age == ""
            }
            onClick={handleFormSubmit}
            className="   h-auto w-32 text-white mt-5  border-none text-xl p-3 rounded-md bg-rose-800 "
          >
            Submit
          </button>
        </div>
      </form>
      <Modal errorMessage={errorMessage} isVisible={showModal} />
    </div>
  );
}
