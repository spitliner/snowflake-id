export default class Snowflake {
    static generate({ time = Date.now(), epoch = Date.UTC(1970, 0, 1).valueOf(), shard, } = {}) {
        const timestamp = time instanceof Date ? time.valueOf() : new Date(time).valueOf();
        const setEpoch = epoch instanceof Date ? epoch.valueOf() : new Date(epoch).valueOf();
        let id = (BigInt(timestamp) - BigInt(setEpoch)) << BigInt(22);
        id |= BigInt(shard ? shard % 1024 : Math.trunc(Math.random() * 1024)) << BigInt(12);
        id |= BigInt(this.#sequence++ % 4096);
        return id.toString();
    }
    static parse(snowflake) {
        try {
            const binaryValue = BigInt(snowflake).toString(2);
            const binaryFormatSnowflake = binaryValue.padStart(63, '0');
            return {
                snowflake,
                binary: '0b' + binaryValue,
                timestamp: new Date(Number.parseInt(binaryFormatSnowflake.slice(0, 41), 2)),
                shard: Number.parseInt(binaryFormatSnowflake.slice(41, 52), 2),
                sequence: Number.parseInt(binaryFormatSnowflake.slice(52), 2),
            };
        }
        catch {
            return {
                snowflake,
                binary: '',
                timestamp: 0,
                shard: 0,
                sequence: 0,
            };
        }
    }
    static #sequence = 0;
}

//# sourceMappingURL=index.js.map