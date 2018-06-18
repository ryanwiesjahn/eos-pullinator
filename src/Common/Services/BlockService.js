import EosAPI from 'eosjs-api';

export default class BlockService {
    _eos;

    constructor(config) {
        this._eos = EosAPI(config);
    }

    async getChainInfo() {
        return this._eos.getInfo({});
    }

    async getBlock(blockNumber) {
        return this._eos.getBlock(blockNumber);
    }

    async getRecentBlocks(amount) {
        if(amount < 1 || amount > 100) {
            throw new RangeError("The amount must be between 1 and 100, inclusive.");
        }

        let chainInfo = await this.getChainInfo();
        let headBlockNumber = chainInfo.head_block_num;

        return Promise.all(Array.from(Array(amount)).map(async (value, index) => {
            let blockNumber = headBlockNumber - index;
            return this.getBlock(blockNumber);
        }));
    }
}