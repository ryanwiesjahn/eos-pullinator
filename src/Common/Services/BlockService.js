import EosAPI from 'eosjs-api';

export default class BlockService {
    _eos;

    constructor(config) {
        this._eos = EosAPI(config);
    }

    async getChainInfo() {
        return await this._eos.getInfo({});
    }

    async getBlock(blockNumber) {
        return await this._eos.getBlock(blockNumber);
    }

    async getRecentBlocks(amount) {
        if(amount < 1) {
            throw new RangeError("The amount must be at least 1.");
        }

        let chainInfo = await this.getChainInfo();
        let headBlockNumber = chainInfo.head_block_num;

        return await Promise.all(Array.from(Array(amount)).map(async (value, index) => {
            let blockNumber = headBlockNumber - index;
            return await this.getBlock(blockNumber);
        }));
    }
}