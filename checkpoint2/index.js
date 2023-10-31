class wallet {
    #owner = '';
    #amount = 0;

    get owner() {
        return this.owner;
    }
    set owner(newOwner){
        this.owner = newOwner;
    }
    get amount(){
        return this.amount;
    }
    set amount(newAmount){
        this.amount = newAmount;
    }
}

async function renderWallet(){
    try {
        const resp = await fetch('https://randomuser.me/api/');
        const user = await resp.json();
        const result = user[0].name;
        console.log(result);
        result
    } catch (error) {
        console.log('Error')
    }
}
renderWallet()
