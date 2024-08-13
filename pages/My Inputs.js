import { useContext } from "react";
import { loanInputContext } from "./contexts/LoanFormInputContext";
import { UserContext } from "./contexts/UserContext";

export default function MyInput(){

  const userData = useContext(UserContext);

const InputContext = useContext(loanInputContext);

    return (
      <>
        <div>
          <div></div>
          <label className="mt-3 "> {userData.name} {InputContext.LabelTitle} </label>
          <input
            value={InputContext.value}
            onChange={(event) => {
             InputContext.HandleChange(event.target.value);
            }}
            className="w-full text-black h-[30px] border-none "
          />
        </div>
      </>
    );
}