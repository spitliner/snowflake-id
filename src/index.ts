/* eslint-disable @typescript-eslint/no-extraneous-class */
/* eslint-disable no-bitwise */
/* eslint-disable @typescript-eslint/naming-convention */
import crypto from 'node:crypto';

export default class Snowflake {
    static generate({
        timestamp = Date.now(),
        epoch = Date.UTC(1970, 0, 1).valueOf(),
        shard,
    }: {
        timestamp?: number | Date;
        epoch?: number | Date;
        shard?: number;
    } = {}) {
        const timeUTC = timestamp instanceof Date ? timestamp.valueOf() : new Date(timestamp).valueOf();
        const setEpoch = epoch instanceof Date ? epoch.valueOf() : new Date(epoch).valueOf();

        let id = (BigInt(timeUTC) - BigInt(setEpoch)) << BigInt(22);
        id |= BigInt(shard ?? Math.trunc(Math.random() * 1024)) << BigInt(12);
        id |= BigInt(this.#sequence++ % 4096);

        return id.toString();
    }

    static parse(snowflake: string) {
        try {
            const binaryValue = BigInt(snowflake).toString(2).padStart(63, '0');
            return {
                snowflake,
                binary: '0b' + binaryValue,
                timestamp: new Date(Number.parseInt(binaryValue.slice(0, 41), 2)),
                shard: Number.parseInt(binaryValue.slice(42, 51), 2),
                sequence: Number.parseInt(binaryValue.slice(52), 2),
            };
        } catch {
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
