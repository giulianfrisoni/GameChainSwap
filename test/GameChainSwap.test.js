const { assert } = require('chai')
const { default: Web3 } = require('web3')

const GameChainSwap = artifacts.require('GameChainSwap')
const GameChainToken = artifacts.require('GameChainToken')


require('chai')
 .use(require('chai-as-promised'))
 .should()  

function GameChaintokens(n){
    return web3.utils.toWei(n,'ether')
}



contract('GameChainSwap',(accounts) =>{
    let gameChainSwap,gameChainToken
    before( async () => {
        gameChainToken = await GameChainToken.new()
        gameChainSwap = await GameChainSwap.new()
        // All tokens to Exchange
        await gameChainToken.transfer(gameChainSwap.address,GameChaintokens('1000000'))
    })



    describe('GameChainToken deployment', async () =>{

        it('Contract has been assigned the name', async() => {
            
            const name = await gameChainToken.name()
            assert.equal(name,"GameChainToken Token")
        })
    })

    describe('GameChainSwap deployment', async () =>{

        it('Contract has been assigned the name', async() => {
            
            const name = await gameChainSwap.name()
            assert.equal(name,'GameChainSwap Gaming ETH Token Exchange')
        })
        it ('Swap has tokens', async () => {
            let balance = await gameChainToken.balanceOf(gameChainSwap.address)
            assert.equal(balance.toString(),GameChaintokens('1000000'))
        })
    })

})