import React, { useEffect, useState } from "react";
// import abis from "./abis.json"
import contractAbi from '../Contract/abis.json'
import { FetchAccount,CheckWinEth,SwitchNetwork,Contract,readOnlyProvider,writeProvider, getSigner  } from '../WalletHelper/WalletHelper'
import { ethers } from "ethers";
// const helper  = require('../WalletHelper/WalletHelper')
const MainMint = () => {

    const [provider ,setProivder] =useState(null)
    const [defaultAcc,setDefaultAccount] = useState(null)
    const [contract,setContracts] = useState(null)
    const [signer,setSigner] = useState(null)
    const [inputValue,setInputValue] = useState('');

    const connectWallet = ()=>{
        FetchAccount().then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    const _setSigner = (tempP)=>{
        let signer = getSigner(tempP);
        setSigner(signer);
    }

    const swtich = ()=>{
        SwitchNetwork().then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        }) 
    }
    const setProivders = ()=>{
         writeProvider().then(res=>{
            console.log(res)
            setProivder(res)
            _setSigner(res)
        });
       
    }
    useEffect(()=>{
        if(provider && signer){
            console.log(provider,"setting provider and contract")
            setContract()
        }
    },[provider])

    const setContract=()=>{
        Contract("0x13331029a38bdace91e471b516c57be4303bb14f",
        contractAbi,provider).then(res=>{
            console.log(res)
            setContracts(res)
        })
    }
    const getPrice = async()=>{
        let price = await contract.price(inputValue).then(res=>{
            console.log(res,parseInt(res.toHexString(),16)/100000000000000000)
            
        })
    }
    const handleInput =(event)=>{
        console.log(event.target.value)
        setInputValue(event.target.value)
    }
  return (
    <>
      <h2>Main Mint</h2>
      <div onClick={connectWallet}>
        <a >ConnectWallet</a>
      </div>
      <div onClick={setProivders}>
        <a >setProvider</a>
      </div>

      <div onClick={setContract}>
        <a >setContract</a>
      </div>
      <div>
            <input type={'text'} value={inputValue} onChange={handleInput}/> 
        </div>
      <div onClick={getPrice}>
        
        <a >getPrice</a>
      </div>
      <div onClick={swtich}>
        <a >add Polygon to Network</a>
      </div>

    </>
  );
};

export default MainMint;
