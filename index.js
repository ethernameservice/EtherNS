const EtherNS = class {
    constructor(Provider) {
      this.Provider = Provider;
      const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"IS_ALLOWLIST_ACTIVE","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IS_SALE_ACTIVE","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"_checkName","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"ether_name","type":"string"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"}],"name":"allowList","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"allowlistAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"name":"dataAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"ether_name","type":"string"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"ether_name","type":"string"},{"internalType":"string","name":"Area","type":"string"}],"name":"getDataAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"name":"lastAddresses","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"new_ether_name","type":"string"}],"name":"nameBurnAndChange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"primaryAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ref","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ref_discount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ref_owner","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref_address","type":"address"},{"internalType":"string","name":"ether_name","type":"string"}],"name":"register","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"ether_name","type":"string"},{"internalType":"string","name":"subdomain_name","type":"string"}],"name":"registerSubdomain","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"resolveAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"eth_name","type":"string"},{"internalType":"address","name":"newresolve","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes","name":"allwchr","type":"bytes"}],"name":"setAllowChars","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"WhitesaleIsActive","type":"bool"}],"name":"setAllowListSaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"customBaseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"eth_name","type":"string"},{"internalType":"string","name":"setArea","type":"string"},{"internalType":"string","name":"newDatas","type":"string"}],"name":"setDataAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxCharSize_","type":"uint256"}],"name":"setMaxCharSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_newMerkleRoot","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"customPrice","type":"uint256"}],"name":"setPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"eth_name","type":"string"}],"name":"setPrimaryAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ref_","type":"uint256"},{"internalType":"uint256","name":"ref_owner_","type":"uint256"},{"internalType":"uint256","name":"ref_discount_","type":"uint256"},{"internalType":"uint256","name":"subdomains_fee_","type":"uint256"}],"name":"setRefSettings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"saleIsActive","type":"bool"}],"name":"setSaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"saleIsActive","type":"bool"},{"internalType":"uint256","name":"customPrice","type":"uint256"},{"internalType":"string","name":"ether_name","type":"string"}],"name":"setSubdomainSaleActive","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"subDomains_cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"subDomains_publicSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subdomains_fee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"tokenAddressandID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIDandAddress","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwnerName","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
      const c_address = "0x6bfdc5b9529355409b13ed7d0b2df14a8e45b516";
      this.contract = new Provider.eth.Contract(abi, c_address);
      }
      primaryAddress(address) {
      return this.contract.methods.primaryAddress(address).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      });
    }
      
    addressOwners(address) {
      return this.contract.methods.walletOfOwnerName(address).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      }).catch(function(error){
        return error;
      });
    }
      
      setResolveAddress(ether_name,new_address,account) {
      return this.contract.methods.setAddress(ether_name,new_address).send({from: account}).once("error", (err) => {
          console.log(err);
        })
        .then((receipt) => {
        return receipt;
      }).catch(function(error){
        return error;
      });
    }
    
    
      setPrimaryAddress(ether_name,account) {
      return this.contract.methods.setPrimaryAddress(ether_name).send({from: account}).once("error", (err) => {
          console.log(err);
        })
        .then((receipt) => {
        return receipt;
      }).catch(function(error){
        return error;
      });
    }
    
    setSubdomainSaleActive(active,price,ether_name,account){
        return this.contract.methods.setSubdomainSaleActive(active,price,ether_name).send({from: account}).once("error", (err) => {
          console.log(err);
        })
        .then((receipt) => {
        return receipt;
      }).catch(function(error){
        return error;
      });
    }
    
    
    register(ether_name,account,ref_address,value) {
      return this.contract.methods.register(ref_address,ether_name.replace(".ether","")).send({from: account,value: value}).once("error", (err) => {
          console.log(err);
        })
        .then((receipt) => {
        return receipt;
      }).catch(function(error){
        return error;
      });
    }
    
    
    registerAllowlist(ether_name,account,proof,value) {
      return this.contract.methods.allowList(ether_name.replace(".ether",""), proof).send({from: account,value: value}).once("error", (err) => {
          console.log(err);
        })
        .then((receipt) => {
        return receipt;
      }).catch(function(error){
        return error;
      });
    }
    
   
    
    registerSubdomain(ether_name,account,subdomain,value) {
      return this.contract.methods.registerSubdomain(ether_name.replace(".ether",""),subdomain).send({from: account,value: value}).once("error", (err) => {
          console.log(err);
        })
        .then((receipt) => {
        return receipt;
      }).catch(function(error){
        return error;
      });
    }
    
     subdomainPublicSale(ether_name) {
      return this.contract.methods.subDomains_publicSale(ether_name).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      }).catch(function(error){
        return error;
      });
    }	
    
    
     subdomainCost(ether_name) {
      return this.contract.methods.subDomains_cost(ether_name).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      }).catch(function(error){
        return error;
      });
    }	
    
    
     ownerOf(token_id) {
       return this.contract.methods.ownerOf(token_id).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      }).catch(function(error){
        return error;
      });  
     }
    
      
     lastAddresses(count) {
      return this.contract.methods.lastAddresses(count).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      }).catch(function(error){
        return error;
      });
    }	
    
    addressOwnersMap(address) {
      return  this.contract.methods.walletOfOwnerMap(address).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      }).catch(function(error){
        return error;
      });
    }
  
  
   async resolveAddress(ether_name)  {
      let result = ether_name.replace(".ether", "");
      return this.contract.methods.resolveAddress(result).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      });
    }
        
    allowlistAddresses(address) {
            return  this.contract.methods.allowlistAddresses(address).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      }).catch(function(error){
        return error;
      });
  
      }  
      
      checkName(ether_name) {
              let ether_name2 = ether_name.replace(".ether", "");
            return  this.contract.methods._checkName(ether_name2).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      }).catch(function(error){
        return error;
      });
  
      }
  
  
      isTaken(ether_name) {
              let ether_name3 = ether_name.replace(".ether", "");
            return  this.contract.methods.tokenAddressandID(ether_name3).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
       return result;
      }
      }).catch(function(error){
        return error;
      });
  
      }	
      
    setData(ether_name,area,value, account) {
        let result = ether_name.replace(".ether", "");
        return this.contract.methods.setDataAddress(ether_name,area,value).send({from: account}).once("error", (err) => {
          console.log(err);
        })
        .then((receipt) => {
        return receipt;
      }).catch(function(error){
        return error;
      });
    }
    
    getData(ether_name,data) {
      let result = ether_name.replace(".ether", "");
      return this.contract.methods.getDataAddress(result,data).call((err, result) => {
        if(err){
          console.error('Error: ', err);
          return err;
          // handle the error here
        } else {
        return result;
      }
      });
    }
  
    getTwitter(ether_name) {
      return this.getData(ether_name,'twitter')
    }
    getInstagram(ether_name) {
      return this.getData(ether_name,'instagram')
    }
  getEmail(ether_name) {
    return this.getData(ether_name,'email')
  }
  getUrl(ether_name) {
    return this.getData(ether_name,'url')
  }
  getAvatar(ether_name) {
    return this.getData(ether_name,'avatar')
  }
  getDescription(ether_name) {
    return this.getData(ether_name,'description')
  }
  getNotice(ether_name) {
    return this.getData(ether_name,'notice')
  }
  getKeywords(ether_name) {
    return this.getData(ether_name,'keywords')
  }
  getDiscord(ether_name) {
    return this.getData(ether_name,'discord')
  }
  getTiktok(ether_name) {
    return this.getData(ether_name,'tiktok')
  }
  getReddit(ether_name) {
    return this.getData(ether_name,'reddit')
  }
  getTelegram(ether_name) {
    return this.getData(ether_name,'telegram')
  }
  getContent(ether_name) {
    return this.getData(ether_name,'content')
  }
  
  
  };