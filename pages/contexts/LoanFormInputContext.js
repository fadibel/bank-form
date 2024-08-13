import { Input } from "postcss";
import { createContext } from "react";


export  let loanInputContext = createContext({
    LabelTitle: "",
    HashChange: null,
    InputValue: null,
} )