import { ethers, utils } from 'ethers'

export const CheckWinEth = ()=>{
   let checkPromise = new Promise ((resolve,reject)=>{
        if(window.ethereum){
            resolve()
        }else{
            let err =  "window ethereum not found"
            reject(err)
        }
   })

   return checkPromise;
}

export const ConnectWallet = async()=>{
    CheckWinEth().then(()=>{

    }).catch(err=>{
        return new Error(err).message;
    })
}

export const FetchAccount = async()=>{
        return CheckWinEth().then(()=>{
            return window.ethereum.request({method:"eth_requestAccounts"}).then(res=>{
                let iCappedAccount = utils.getAddress(ethers.utils.getIcapAddress(res[0]))
                
                return iCappedAccount;
                
            }).catch(err=>{
                return new Error(err).message;
            })

            
        }).catch(err=>{
            return new Error(err).message;
        })
}

