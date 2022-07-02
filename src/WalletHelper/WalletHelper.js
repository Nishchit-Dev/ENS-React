import { ethers, utils } from "ethers";
export const CheckWinEth = () => {
  let checkPromise = new Promise((resolve, reject) => {
    if (window.ethereum) {
      resolve();
    } else {
      let err = "window ethereum not found";
      reject(err);
    }
  });

  return checkPromise;
};

export const FetchAccount = async () => {
  return CheckWinEth().then(() => {
    return window.ethereum
      .request({ method: "eth_requestAccounts" })
      .then((res) => {
        let iCappedAccount = utils.getAddress(
          ethers.utils.getIcapAddress(res[0])
        );

        return iCappedAccount;
      });
  });
};

export const readOnlyProvider = async() => {
  return CheckWinEth().then(() => {
    return new ethers.providers.JsonRpcProvider( "https://polygon-mainnet.g.alchemy.com/v2/WIeYyhZo4J_UI8A2AqOi3KvCGVTK_nM4" ||
      process.env.React_APP_AlchemyKey
    );
  });
};
export const writeProvider =async () => {
  return CheckWinEth().then(() => {
    return new ethers.providers.Web3Provider(window.ethereum, "any");
  });
};
export const Contract = async (contractAddress, Abi, provider) => {
  return CheckWinEth().then(() => {
    return new ethers.Contract(contractAddress, Abi, provider);
  });
};
export const SwitchNetwork = async() => {
    let chainId = ethers.utils.hexValue(137)
  let network = [
    {
      chainId: "0x89" ,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "Matic",
        symbol: "Matic",
        decimals: 18,
      }, 
    //   main net : https://polygon-rpc.com/
    // testnet : https://rpc-mumbai.maticvigil.com/

    // mainnet BlockExplorer : https://polygonscan.com/
    // testnet BlockExplorer : https://mumbai.polygonscan.com/
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
  ];
  return CheckWinEth().then(() => {
    return window.ethereum.request({method:"wallet_addEthereumChain",params:network}).then(()=>{
        return true
    }).catch(()=>{
        return false
    })
  });
};
export const getSigner = (provider)=>{
    return provider.getSigner()
}
