import {React} from "react"
import IncomeForm from "./IncomeForm";


const WalletBalance=({balance,updateBalance})=>{
    return (
    <div style={{height:"100px",width:"250px",border:"4px solid black", textAlign:"center",fontSize:"10px"}}>
    <h1> Wallet Balance: ${balance}</h1>
            <IncomeForm updateBalance={updateBalance} />
        
  </div>

    )
}
export default WalletBalance;