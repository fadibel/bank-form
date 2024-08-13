import Image from "next/image";
import { Inter } from "next/font/google";
import LoanForm from "./LoanForm";
import { UserContext } from "./contexts/UserContext";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {


  
  return (

    <UserContext.Provider>

    <div className="flex justify-center text-black mt-64 ">
      <LoanForm/>
    </div>
    </UserContext.Provider>
   
  );
}
