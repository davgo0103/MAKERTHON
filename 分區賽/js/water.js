const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "usage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "quality",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserve",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "recycled",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "billing",
				"type": "uint256"
			}
		],
		"name": "setWaterData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "usage",
				"type": "uint256"
			}
		],
		"name": "updateWaterUsage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "usage",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quality",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "reserve",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "recycled",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "billing",
				"type": "uint256"
			}
		],
		"name": "WaterDataUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "usage",
				"type": "uint256"
			}
		],
		"name": "WaterUsageUpdated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getWaterData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "usage",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "quality",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserve",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "recycled",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "billing",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "getWaterUsage",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "waterResources",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "usageData",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "qualityData",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "reserveData",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "recycledData",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "billingData",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "waterUsages",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const CONTRACT_ADDRESS = "0xa400FCbE33C82FDD8d2a0b9235724ab72A6B12C7";
function link() {
	

	//const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	const web3 = new Web3(window.ethereum);

	if (typeof window.ethereum !== 'undefined') {
		console.log('MetaMask已經安裝');
	}

	// 請求使用者連接MetaMask
	ethereum.request({ method: 'eth_requestAccounts' })
		.then(accounts => {
			// 使用者已連接MetaMask
			console.log('已連接MetaMask');
		})
		.catch(error => {
			// 使用者拒絕連接MetaMask
			Swal.fire('連線錯誤!', '你必須與網頁連線才能正常使用!', 'error');
			console.log('拒絕連接MetaMask');
		});


	const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);

}

	//const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
	const web3 = new Web3(window.ethereum);

	if (typeof window.ethereum !== 'undefined') {
		console.log('MetaMask已經安裝');
	}

	// 請求使用者連接MetaMask
	ethereum.request({ method: 'eth_requestAccounts' })
		.then(accounts => {
			// 使用者已連接MetaMask
			console.log('已連接MetaMask');
		})
		.catch(error => {
			// 使用者拒絕連接MetaMask
			Swal.fire('連線錯誤!', '你必須與網頁連線才能正常使用!', 'error');
			console.log('拒絕連接MetaMask');
		});


	const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);






async function setWaterData() {
	const address = document.getElementById("user-address").value;
	const usage = document.getElementById("usage-input").value;
	const quality = document.getElementById("quality-input").value;
	const reserve = document.getElementById("reserve-input").value;
	const recycled = document.getElementById("recycled-input").value;
	const billing = document.getElementById("billing-input").value;

	// 檢查輸入是否為數字
	if (
		isNaN(parseInt(usage)) ||
		isNaN(parseInt(quality)) ||
		isNaN(parseInt(reserve)) ||
		isNaN(parseInt(recycled)) ||
		isNaN(parseInt(billing))
	) {
		Swal.fire('Opps!', '請輸入數字!!', 'error');
		return;
	}

	// 呼叫合約的 setWaterData 函數
	try {
		Swal.fire({
			title: '與合約交互中...',
			allowEscapeKey: false,
			allowOutsideClick: false,
			timer: 300000,
			didOpen: () => {
				Swal.showLoading();
			}
		});

		const contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
		const accounts = await web3.eth.getAccounts();
		await contract.methods
			.setWaterData(address, usage, quality, reserve, recycled, billing)
			.send({ from: accounts[0], gas: 1000000 });

		Swal.fire('Good job!', '用水數據更新成功!!', 'success');
	} catch (error) {
		console.error(error);
		Swal.fire('Opps!', '用水數據更新失敗!!', 'error')
	}
}



async function updateWaterUsage() {
	const address = document.getElementById("user-address").value;
	const usage = document.getElementById("update-total-input").value;

	Swal.fire({
		title: '與合約交互中...',
		allowEscapeKey: false,
		allowOutsideClick: false,
		timer: 300000,
		didOpen: () => {
			Swal.showLoading();
		}
	});


	if (isNaN(parseInt(usage))) {
		Swal.fire('Opps!', '請輸入數字!!', 'error')
		return;
	}

	// 呼叫合約的 updateWaterUsage 函數
	try {
		const contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
		const accounts = await web3.eth.getAccounts();
		await contract.methods.updateWaterUsage(address, usage).send({ from: accounts[0] });

		Swal.fire('Good job!', '用水總量更新成功!!', 'success')

	} catch (error) {
		console.error(error);
		Swal.fire('Opps!', '用水總量更新失敗!!', 'error')
	}
}



async function getWaterData() {
	const address = document.getElementById("user-address").value;

	// 呼叫合約的 getWaterData 函數
	try {
		const contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
		const result = await contract.methods.getWaterData(address).call();
		const usage = result[0];
		const quality = result[1];
		const reserve = result[2];
		const recycled = result[3];
		const billing = result[4];

		// 顯示結果

		document.getElementById("usage-input").value = usage;
		document.getElementById("quality-input").value = quality;
		document.getElementById("reserve-input").value = reserve;
		document.getElementById("recycled-input").value = recycled;
		document.getElementById("billing-input").value = billing;
		document.getElementById("total-input").value = "0";
	} catch (error) {
		console.error(error);
		Swal.fire('Opps!', '獲取用水數據失敗!!', 'error')
	}
}



async function getWaterUsage() {

	try {

		const address = document.getElementById("user-address").value;
		if (isNaN(parseInt(address))) {
			Swal.fire('Opps!', '請輸入地址!!', 'error')
			return;
		}
		const contractAbi = [
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "usage",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "quality",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "reserve",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "recycled",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "billing",
						"type": "uint256"
					}
				],
				"name": "setWaterData",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "usage",
						"type": "uint256"
					}
				],
				"name": "updateWaterUsage",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "usage",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "quality",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "reserve",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "recycled",
						"type": "uint256"
					},
					{
						"indexed": false,
						"internalType": "uint256",
						"name": "billing",
						"type": "uint256"
					}
				],
				"name": "WaterDataUpdated",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "user",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "usage",
						"type": "uint256"
					}
				],
				"name": "WaterUsageUpdated",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					}
				],
				"name": "getWaterData",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "usage",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "quality",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "reserve",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "recycled",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "billing",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "user",
						"type": "address"
					}
				],
				"name": "getWaterUsage",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "waterResources",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "usageData",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "qualityData",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "reserveData",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "recycledData",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "billingData",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"name": "waterUsages",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		]; // 填入 ABI

		const contract = new web3.eth.Contract(contractAbi, CONTRACT_ADDRESS);
		const usage = await contract.methods.getWaterUsage(address).call();

		// 顯示結果
		document.getElementById("usage-input").value = "0";
		document.getElementById("quality-input").value = "0";
		document.getElementById("reserve-input").value = "0";
		document.getElementById("recycled-input").value = "0";
		document.getElementById("billing-input").value = "0";
		document.getElementById("total-input").value = usage;
	} catch (error) {
		console.error(error);
		Swal.fire('Opps!', '獲取用水數據失敗!!', 'error')
	}

}