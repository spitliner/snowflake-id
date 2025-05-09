function safePump(sequence: number) {
    if (sequence >= Number.MAX_SAFE_INTEGER) {
        return 0;
    }

    return sequence + 1;
}

let sequence = 0;

export function generateSnowflake({
    time = Date.now(),
    epoch = 0,
    shard,
}: {
    time?: number | Date;
    epoch?: number | Date;
    shard?: number;
} = {}) {
    const timestamp = time instanceof Date ? time.valueOf() : new Date(time).valueOf();
    const setEpoch = epoch instanceof Date ? epoch.valueOf() : new Date(epoch).valueOf();

    if (setEpoch > timestamp) {
        throw new Error('epoch can\'t be larger than timestamp');
    }

    let id = BigInt((timestamp - setEpoch) % (2 ** 41)) << BigInt(22);
    id |= BigInt(shard ? shard % 1024 : Math.trunc(Math.random() * 1024)) << BigInt(12);
    id |= BigInt(sequence % 4096);

    sequence = safePump(sequence);

    return id.toString();
}

export function parseSnowflake(snowflake: string) {
    try {
        const binaryValue = BigInt(snowflake).toString(2);

        if (binaryValue.length > 63) {
            throw new Error('value too big to be snowflake');
        }

        const binaryFormatSnowflake = binaryValue.padStart(63, '0');

        return {
            snowflake,
            binary: '0b' + binaryValue,
            timestamp: Number.parseInt(binaryFormatSnowflake.slice(0, 41), 2),
            shard: Number.parseInt(binaryFormatSnowflake.slice(41, 51), 2),
            sequence: Number.parseInt(binaryFormatSnowflake.slice(51), 2),
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

export function generateUTCsnowflake({
    time = Date.now(),
}: {
    time?: number | Date;
} = {}) {
    const timestamp = time instanceof Date ? time.valueOf() : new Date(time).valueOf();

    let id = BigInt(timestamp % (2 ** 48)) << BigInt(16);
    id |= BigInt(sequence % 65_536);

    sequence = safePump(sequence);

    return id.toString();
}

export function parseUTCsnowflake(snowflake: string) {
    try {
        const binaryValue = BigInt(snowflake).toString(2);

        if (binaryValue.length > 63) {
            throw new Error('value too big to be snowflake');
        }

        const binaryFormatSnowflake = binaryValue.padStart(63, '0');

        return {
            snowflake,
            binary: '0b' + binaryValue,
            timestamp: Number.parseInt(binaryFormatSnowflake.slice(0, 48), 2),
            sequence: Number.parseInt(binaryFormatSnowflake.slice(48), 2),
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

const Snowflake = {
    generate: generateSnowflake,
    parse: parseSnowflake,
    generateUTC: generateUTCsnowflake,
    parseUTC: parseUTCsnowflake
};

export default Snowflake;
