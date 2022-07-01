import React from "react";
import { FetchAccount,CheckWinEth,ConnectWallet  } from '../WalletHelper/WalletHelper'
// const helper  = require('../WalletHelper/WalletHelper')
const MainMint = () => {

    FetchAccount().then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
  return (
    <>
      <h2>Main Mint</h2>
    </>
  );
};

export default MainMint;
