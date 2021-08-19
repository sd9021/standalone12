// FREE OF USE, EXCEPT OWNER OF ETH WALLET: 0xcf684dfb8304729355b58315e8019b1aa2ad1bac
// EXCEPTION ALSO FOR PEOPLE ACTING FOR THE OWNER OF THE ETH WALLET 0xcf684dfb8304729355b58315e8019b1aa2ad1bac

const ABI_Tiles = [{"constant":false,"inputs":[],"name":"setLocked","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"getWhatHappened","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"getLocked","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"}],"name":"buyTile","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"},{"name":"_s","type":"string"}],"name":"setStatus","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"},{"name":"newowner","type":"address"}],"name":"setOwner","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"}],"name":"getLastFarm","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"},{"name":"index","type":"uint256"},{"name":"_block","type":"int8[5]"}],"name":"editBlock","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"},{"name":"blocktype","type":"int8"}],"name":"farmTile","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"},{"name":"_n","type":"string"}],"name":"setName","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"}],"name":"getName","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"}],"name":"getStatus","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"}],"name":"getOwner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"empty","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"col","type":"uint8"},{"name":"row","type":"uint8"}],"name":"getBlocks","outputs":[{"name":"","type":"int8[5][]"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"col","type":"uint8"},{"indexed":false,"name":"row","type":"uint8"}],"name":"TileChanged","type":"event"}];
const ABI_EXCHANGE = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"version","type":"string"},{"indexed":true,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"bidder","type":"address"}],"name":"EtheriaBidCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"version","type":"string"},{"indexed":true,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"bidder","type":"address"}],"name":"EtheriaBidWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"version","type":"string"},{"indexed":true,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"bidder","type":"address"}],"name":"EtheriaBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"version","type":"string"},{"indexed":true,"internalType":"uint256","name":"globalbidid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"bidder","type":"address"}],"name":"EtheriaGlobalBidCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"version","type":"string"},{"indexed":true,"internalType":"uint256","name":"globalbidid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"bidder","type":"address"}],"name":"EtheriaGlobalBidWithdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"version","type":"string"},{"indexed":true,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"globalbidid","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"address","name":"bidder","type":"address"}],"name":"EtheriaGlobalBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"string","name":"version","type":"string"},{"indexed":true,"internalType":"uint256","name":"index","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"}],"name":"EtheriaTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GlobalBidIDCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"version","type":"string"},{"internalType":"uint8","name":"col","type":"uint8"},{"internalType":"uint8","name":"row","type":"uint8"},{"internalType":"uint256","name":"minPrice","type":"uint256"}],"name":"acceptBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"version","type":"string"},{"internalType":"uint8","name":"col","type":"uint8"},{"internalType":"uint8","name":"row","type":"uint8"},{"internalType":"uint256","name":"globalbidid","type":"uint256"}],"name":"acceptGlobalBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"version","type":"string"},{"internalType":"uint8","name":"col","type":"uint8"},{"internalType":"uint8","name":"row","type":"uint8"}],"name":"bid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"bids","outputs":[{"internalType":"uint8","name":"col","type":"uint8"},{"internalType":"uint8","name":"row","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bidder","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"changeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collectFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"etheriav11","outputs":[{"internalType":"contract Etheria","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"etheriav12","outputs":[{"internalType":"contract Etheria","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feesToCollect","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"version","type":"string"}],"name":"globalbid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"globalbids","outputs":[{"internalType":"uint256","name":"bidid","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"bidder","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mapSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"pendingWithdrawals","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"version","type":"string"},{"internalType":"uint8","name":"col","type":"uint8"},{"internalType":"uint8","name":"row","type":"uint8"}],"name":"withdrawBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"version","type":"string"},{"internalType":"uint256","name":"globalbidid","type":"uint256"}],"name":"withdrawGlobalBid","outputs":[],"stateMutability":"nonpayable","type":"function"}];

// only testarray
//const ArrayindexOfTiles = [39, 46, 47, 48, 58, 59, 60, 71, 72, 73, 79, 80, 81, 82, 86, 91, 92, 93, 103, 105];

const ArrayindexOfTiles = [39, 46, 47, 48, 58, 59, 60, 71, 72, 73, 79, 80, 81, 82, 86, 91, 92, 93, 103, 105, 112, 113, 114, 115, 116, 118, 119, 125, 126, 127, 135, 136, 137, 146, 147, 148, 149, 150, 151, 152, 153, 159, 160, 161, 168, 169, 174, 179, 180, 181, 183, 184, 185, 190, 191, 192, 193, 194, 211, 212, 213, 214, 215, 217, 218, 224, 225, 242, 243, 244, 245, 246, 247, 249, 250, 251, 258, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 306, 307, 309, 310, 311, 312, 313, 314, 315, 316, 317, 319, 320, 322, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 356, 357, 358, 371, 372, 373, 376, 377, 378, 379, 380, 381, 382, 383, 385, 387, 389, 390, 391, 392, 394, 403, 404, 405, 406, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 431, 432, 434, 435, 437, 438, 439, 440, 441, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 455, 457, 459, 460, 463, 464, 465, 467, 468, 469, 470, 471, 472, 473, 474, 475, 477, 478, 479, 480, 481, 482, 483, 485, 486, 487, 488, 489, 490, 491, 492, 493, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 523, 524, 525, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 564, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 694, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 718, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 760, 765, 766, 767, 769, 771, 772, 773, 774, 775, 776, 777, 778, 779, 790, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 833, 837, 839, 840, 841, 842, 843, 844, 866, 870, 871, 872, 873, 874, 875, 876, 877, 880, 899, 904, 905, 906, 907, 908, 909, 910, 912, 932, 938, 939, 940, 941, 952, 953, 970, 972, 973, 974, 975, 985, 988, 1006, 1007, 1008, 1012, 1020, 1044, 1052];
const version = "1.2";

let withdrawablefunds;
let GlobalBidIDCounter;
let BlockchainTileV11Contract;
let ExchangeTileV11Contract;
let accounts;

const getBlockchainTileV11Contract = async (web3) => {
		const contractv11 = new web3.eth.Contract(
		ABI_Tiles,
		'0xB21f8684f23Dbb1008508B4DE91a0aaEDEbdB7E4'
	);
	return contractv11;
};

const getExchangeTileV11Contract = async (web3) => {
		const exchangev11 = new web3.eth.Contract(
		ABI_EXCHANGE,
		'0xf1b8616aE1bF59C55bFa3A47AD1b6f9a95a902de'
	);
	return exchangev11;
};

const getTileOwner = async (contract,col,row) => {
	let owner = await contract.methods.getOwner(col,row).call();
	return owner;
}

const delay = ms => new Promise(res => setTimeout(res, ms));

async function startApp() {
	let web3;
	let col,row,content;
	content = '';
	if (window.ethereum) {
		web3 = new Web3(ethereum);
		try {
			await window.web3.eth.requestAccounts();
		} catch (error) {
			// meh
		}
	}
	else if (window.web3) {
		web3 = new Web3(web3.currentProvider);
	}
	else {
		console.log('Install Metamask');
	}
	accounts = await web3.eth.requestAccounts();
	console.log(accounts,accounts[0]);
	BlockchainTileV11Contract = await getBlockchainTileV11Contract(web3);
	ExchangeTileV11Contract = await getExchangeTileV11Contract(web3);
	
	withdrawablefunds = await getwithdrawablefunds();
	
	GlobalBidIDCounter = await getGlobalBidIDCounter();
	
	let tileListArray = document.getElementsByClassName('container');
	let tileList = tileListArray[0];
	tileList.innerHTML = '';
	
	if (withdrawablefunds > 0) {
		content += '<div class="card card-body"><div class="row">' +
			'<div class="col-sm-1">' +
				'<div class="input-group" style="max-width: 300px;">' +
				'<span class="input-group-text" id="basic-addon3">Withdrawable Funds: '+withdrawablefunds+' ETH</span>' +
					'<input class="btn btn-primary" type="submit" value="Withdraw Funds" onclick="return withdrawfunds();">' +
				'</div>' +
			'</div></div></div>';
	}
	
	// Global Bids
	let globalBidArray = [];
	for (let i = 0; i <= GlobalBidIDCounter; i++) {
		await printDivsGlobal(globalBidArray,i);
	}
	console.log(globalBidArray);
	
	content += 
		'<div class="card card-body"><div class="row">' +
			'<div class="col-sm-2">Global Bid</div>' + 
			'<div class="col-sm-2">Amount</div>' + 
			'<div class="col-sm-4">Bidder</div>' +
			'<div class="col-sm-2">my Bid?</div>' +
		'</div></div>';
	content += printGlobalTable(globalBidArray);
	
	// Tile Specific
	let tilearray = [];
	for (let i = 0; i < ArrayindexOfTiles.length; i++) {
		let col = Math.floor(ArrayindexOfTiles[i] / 33);
		let row = ArrayindexOfTiles[i] % 33;
		printDivs(tilearray,col,row);
		await delay(10);
	}
	
	console.log(tilearray);
	content += 
		'<div class="card card-body"><div class="row">' +
			'<div class="col-sm-1">My Tile?</div>' + 
			'<div class="col-sm-1">Col</div>' + 
			'<div class="col-sm-1">Row</div>' + 
			'<div class="col-sm-2">Owner</div>' + 
			'<div class="col-sm">Name</div>' + 
			'<div class="col-sm-1">Min Bid</div>' + 
			'<div class="col-sm-1">CurrentBid</div>' + 
			'<div class="col-sm-1">My Bid?</div>' +
		'</div></div>';
	await delay(1000);
	content += printTable(tilearray);
	tileList.innerHTML += content;
}

async function toIndexID(col,row) {
	return col * 33 + row;
}

async function printDivsGlobal(globalBidArray,counter) {
	let globalBid = await ExchangeTileV11Contract.methods.globalbids(version,counter).call();
	let bidder;
	let myglobalBidbool = globalBid.bidder == accounts[0] ? true : false;
	bidder = globalBid.bidder.substring(0, 6) + "..." +globalBid.bidder.slice(globalBid.bidder.length - 4);
	if (globalBid.amount > 0) {
		globalBidArray.push({
			"bidID": globalBid.bidid,
			"amount": globalBid.amount/10**18,
			"bidder": bidder,
			"myBid": myglobalBidbool
		});
	}
}

async function printDivs(tilearray,col,row) {
	let owner = await getTileOwner(BlockchainTileV11Contract,col,row);
	let mytilebool = owner == accounts[0] ? true : false;
	owner = owner.substring(0, 6) + "..." +owner.slice(owner.length - 4);
	let name = await BlockchainTileV11Contract.methods.getName(col,row).call();
	let hasRequest = name.slice(name.length - 3) == "ETH" ? true : false;
	
	let currentBid = await ExchangeTileV11Contract.methods.bids(version,await toIndexID(col,row)).call();
	let myBid = currentBid.bidder == accounts[0] ? true : false;
	let requestamount = 0;
	if (hasRequest) {
		requestamount = (name.slice(name.length - 7)).replace(/[^0-9+.]/g,'');
	}
	tilearray.push({
		"col": col,
		"row": row,
		"owner": owner,
		"name": name,
		"hasRequest": hasRequest,
		"requestamount": requestamount,
		"currentBid": currentBid.amount/10**18,
		"currentBidWei": currentBid.amount,
		"myBid": myBid,
		"mytiles": mytilebool
	});
}

async function withdrawBid(version,col,row) {
	await ExchangeTileV11Contract.methods.withdrawBid(version.toString(), col, row).send({from: accounts[0]});
	return true;
}
async function sendWithdrawGlobalBid(version,globalbidid) {
	await ExchangeTileV11Contract.methods.withdrawGlobalBid(version.toString(), globalbidid).send({from: accounts[0]});
	return true;
}
async function acceptGlobalBid(version,bidID,fieldnameCol,fieldnameRow) {
	let col = document.getElementById(fieldnameCol.id).value;
	let row = document.getElementById(fieldnameRow.id).value;
	await ExchangeTileV11Contract.methods.acceptGlobalBid(version.toString(), col, row, bidID).send({from: accounts[0]});
	return true;
}
async function acceptBid(version,col,row,minpricewei) {
	await ExchangeTileV11Contract.methods.acceptBid(version.toString(), col, row, minpricewei.toString()).send({from: accounts[0]});
	return true;
}
async function getwithdrawablefunds() {
	let funds = await ExchangeTileV11Contract.methods.pendingWithdrawals(accounts[0]).call();
	return funds/10**18;
}
async function getGlobalBidIDCounter() {
	let counter = await ExchangeTileV11Contract.methods.GlobalBidIDCounter().call();
	return counter;
}
async function withdrawfunds() {
	await ExchangeTileV11Contract.methods.withdraw().send({from: accounts[0]});
	return true;
}
async function ListTile(fieldname,version,col,row) {
	let nameToList = document.getElementById(fieldname.id).value;
	await BlockchainTileV11Contract.methods.setName(col, row, nameToList).send({from: accounts[0]});
	return true;
}
async function BidETH(fieldname,version,col,row) {
	let inputVal = document.getElementById(fieldname.id).value;
	await ExchangeTileV11Contract.methods.bid(version, col, row).send({from: accounts[0], value:  Web3.utils.toWei(inputVal, 'ether')});
	return true;
}



function printGlobalTable(globalBidArray) {
	// sort after boolean
	globalBidArray.sort(function(x, y) {
        return y.myBid-x.myBid || y.amount-x.amount;
	});
	
	//iterate over every array(row) within globalBidArray
	let content = '';
	for (let i = 0; i < globalBidArray.length; i++) {
		content += '<div class="card card-body"><a href="#detailGlobal'+i+'" data-bs-toggle="collapse"><div class="row">';
		content += 
		'<div class="col-sm-2">' + globalBidArray[i].bidID + '</div>' +
		'<div class="col-sm-2">' + globalBidArray[i].amount + ' ETH</div>' +
		'<div class="col-sm-4">' + globalBidArray[i].bidder + '</div>';
		if (globalBidArray[i].myBid == true) {
			content += '<div class="col-sm-2" style="color:red">My Bid</div>';
		} else {
			content += '<div class="col-sm-2"></div>';
		}
		// End
		content += '</div></a></div>' +
		// End Row
		'</div>' +
		// Details Loading
		'<div class="col-12 order-md-last collapse fade" id="detailGlobal'+i+'">' +
			'<div class="card card-body border-top-0">';
				if (globalBidArray[i].myBid == true) {
					content += 
				'<div class="input-group" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Bid Amount: '+globalBidArray[i].amount+' ETH</span>' +
					'<input class="btn btn-primary" type="submit" value="Withdraw Global Bid" onclick="return sendWithdrawGlobalBid('+version+','+globalBidArray[i].bidID+');">' +
				'</div>';
				} else {
				content += 
				'<div class="input-group" style="max-width: 800px;">' +
				'<span class="input-group-text" id="basic-addon3">Bid Amount: '+globalBidArray[i].amount+' ETH - Accept bid?</span>' +
					'<input type="number" class="form-control" placeholder="Col" id="InputGlobalColValue'+i+'" aria-label="InputGlobalColValue">' +
					'<input type="number" class="form-control" placeholder="Row" id="InputGlobalRowValue'+i+'" aria-label="InputGlobalRowValue">' +
					'<button class="btn btn-outline-secondary" type="button" onclick="return acceptGlobalBid(version,'+globalBidArray[i].bidID+',InputGlobalColValue'+i+',InputGlobalRowValue'+i+');")>Accept</button>' +
				'</div>';
				}
			content += 
			'</div>' +
       ' </div>';
	}
	return content;
}
	
function printTable(tilearray) {
	// sort after boolean
	
	tilearray.sort(function(x, y) {
        return y.mytilebool-x.mytilebool || y.myBid-x.myBid || y.currentBid-x.currentBid || y.hasRequest-x.hasRequest || x.requestamount-y.requestamount;
	});
	
	//iterate over every array(row) within tilearray
	let content = '';
	for (let i = 0; i < tilearray.length; i++) {
		content += '<div class="card card-body"><a href="#detail'+i+'" data-bs-toggle="collapse"><div class="row">';
		if (tilearray[i].mytiles == true) {
			content += '<div class="col-sm-1">Owned</div>';
		} else {
			content += '<div class="col-sm-1"></div>';
		}
		content += 
		'<div class="col-sm-1">' + tilearray[i].col + '</div>' +
		'<div class="col-sm-1">' + tilearray[i].row + '</div>' +
		'<div class="col-sm-2">' + tilearray[i].owner + '</div>' + 
		'<div class="col-sm">' + tilearray[i].name + '</div>';
		if (tilearray[i].requestamount > 0) {
			content += 
			'<div class="col-sm-1">' + tilearray[i].requestamount + ' ETH</div>';
		} else {
			content += '<div class="col-sm-1"></div>';
		}
		if (tilearray[i].currentBid > 0) {
			content += 
			'<div class="col-sm-1">' + tilearray[i].currentBid + ' ETH</div>';
		} else {
			content += '<div class="col-sm-1"></div>';
		}
		
		if (tilearray[i].myBid == true) {
			content += 
			'<div class="col-sm-1">My Bid</div>';
		} else {
			content += 
			'<div class="col-sm-2">' +
			'</div>';
		}
		
		content += '</div></a></div>' +
		// End Row
		'</div>' +
		// Details Loading
		'<div class="col-12 order-md-last collapse fade" id="detail'+i+'">' +
			'<div class="card card-body border-top-0">';
				if (tilearray[i].myBid == true) {
					content += 
				'<div class="input-group" style="max-width: 300px;">' +
				'<span class="input-group-text" id="basic-addon3">Current Bid: '+tilearray[i].currentBid+' ETH</span>' +
					'<input class="btn btn-primary" type="submit" value="Withdraw Bid" onclick="return withdrawBid('+version+','+tilearray[i].col+','+tilearray[i].row+');">' +
				'</div>';
				}
				if (tilearray[i].mytiles == true) {
					content += 
				'<div class="input-group" style="max-width: 600px;">' +
				'<span class="input-group-text" id="basic-addon3">Rename tile to list</span>' +
					'<input type="text" class="form-control" placeholder="Listing - 123 ETH" id="InputListValue'+i+'" aria-label="ListValue">' +
					'<button class="btn btn-outline-secondary" type="button" onclick="return ListTile(InputListValue'+i+','+version+','+tilearray[i].col+','+tilearray[i].row+');")>List</button>' +
				'</div>';
					if (tilearray[i].currentBid > 0) {
						content += 
						'<div class="input-group" style="max-width: 300px;">' +
						'<span class="input-group-text" id="basic-addon3">Current Bid: '+tilearray[i].currentBid+' ETH</span>' +
							'<input class="btn btn-primary" type="submit" value="Accept Bid" onclick="return acceptBid('+version+','+tilearray[i].col+','+tilearray[i].row+','+tilearray[i].currentBidWei+');">' +
						'</div>';
					}
				} else {
				content += 
				'<div class="input-group" style="max-width: 300px;">' +
					'<input type="number" class="form-control" placeholder="ETH Bid Amount" id="InputBidValue'+i+'" aria-label="ETHBIDAmount">' +
					'<button class="btn btn-outline-secondary" type="button" onclick="return BidETH(InputBidValue'+i+','+version+','+tilearray[i].col+','+tilearray[i].row+');")>Bid</button>' +
				'</div>';
				}
			content += 
			'</div>' +
       ' </div>';
	}
	return content;
}

startApp();
