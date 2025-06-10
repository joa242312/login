import PageWarapper from "@/components/PageWarapper";
import intance from "@/instance/api";
import { useEffect, useState } from "react";

export default function Produtos(){
   const[produtos,setProdutos] =useState([])
   useEffect(() => { async function getProdutos(){
      const response = await intance.get('/produtos')
      setProdutos(response.data)
   }
   getProdutos()
   }, [])
    return(
     <PageWarapper>
        <p> olá mundo</p>
     </PageWarapper>
    )
    }