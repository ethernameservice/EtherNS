# .ether Name Service
This document will help you incorporate .ether into your projects. In the document, available functions are examined by including web3.js and .ether name service in your project.



### Requirements
>If you are not actively using it in your project, you should install web3.js.

**NODE**
```
npm install web3
```

**YARN**
```
yarn add web3
```

**In the Browser**
```
<script src="https://cdn.jsdelivr.net/npm/web3@latest/dist/web3.min.js"></script>
```
or
```
<script src="https://unpkg.com/web3@latest/dist/web3.min.js"></script>
```

### Installation



### Usage
First, we connect with the libraries.

```
const web3 = new Web3(Web3.givenProvider)
// First create a web3js provider

const etherNS = new EtherNS(web3)
// You are now ready for .ether
```

**Primary Address**

Returns the primary address registered to this address.
```
etherNS.primaryAddress("0x12276DAC0C791d11e2F9166A2B67e3DE45394c69")
.then(function(result){
    console.log(result)
    // Returns the primary address registered to this address.
})
```

**Resolve Address**

Returns the resolved ethereum address of the .ether name.
```
etherNS.resolveAddress("alice.ether").then(function(result){
    console.log(result)
    // Returns the resolved ethereum address of the .ether name.
})
```

**Address Owners**

Returns the domains owned by an address.
```
etherNS.addressOwners("0x12276DAC0C791d11e2F9166A2B67e3DE45394c69").then(function(resultOwners){
	console.log(resultOwners)	
  });
```





**Set New Primary Address**

Changes the primary address.
```
etherNS.setPrimaryAddress("ether_name.ether","OWNER_ETH_ADDRESS").then(function(result){
    if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
```

**Set New Resolve Address**

Changes the resolve address.
```
 etherNS.setResolveAddress("ether_domain.ether","NEW_RESOLVE_ETH_ADDRESS", "OWNER_ETH_ADDRESS").then(function(result){
		 if (result['status']) {
            //Successful
            } else {
            //Failed
            }
 })
```

**Register Main Domain**

Registers a new .ether address and returns the result.
```
etherNS.register("new_domain.ether",YOUR_ETH_ADDRESS,
YOUR_REFERRAL_ADDRESS,web3.utils.toWei('0.04', 'ether'))
.then(function(result){
if (result['status']) {
    // Registration Successful
} else {
    // Registration Failed
}
})
```

**Start or Close subdomain sale.**

```
etherNS.setSubdomainSaleActive("true",web3.utils.toWei("0.05",'ether'),"ether_name","OWNER_ETH_ADDRESS").then(function(result){
	if (result['status']) {
     //Successful
     } else {
     //Failed
     }
})
```
