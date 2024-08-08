import Image from "next/image";
import { Inter } from "next/font/google";
import LoanForm from "./LoanForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (

    <div className="flex justify-center text-black mt-64 ">
      <LoanForm/>
    </div>
   
  );
}
