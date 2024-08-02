"use client";

import customer from "@/apis/customer";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";


export default ()=>{

    let [customers, setcustomers]  = useState([]);

    useEffect(()=>{

        customer.getcustomers().then((resp)=>{
            console.log(resp.data)
            setcustomers(resp.data);
        })

    }, [])

    function addcustomer(){

        customer.addcustomer({
            Customer_name:"Ali",
            customer_category:"66a25eaafaa8b0418b4cb561",
            stock_account:"6628cd62b6fe330e448d4631",
            op_balance:400,
            customer_unit:"6638e6e1faa8b0418b4b1a62"
        }).then((resp)=>{
            
            console.log(resp.data)
            toast.success("Customer Added");
            


        }).catch(function(err){
            console.log(err);
        })

    }

    return <div>

        <table border={1}>

         <thead>
            <tr>
                <th>Open Balance</th>
                <th>Customer Name</th>
            </tr>
         </thead>

            {
                customers.map(function(customer){
                    return <tr>
                        <td>{customer.op_balance}</td>
                        <td>{customer.customer_name}</td>
                    </tr>
                })
            }
        </table>

    <button onClick={addcustomer}>Add Customer</button>

    </div>

}