import { expect, test } from 'vitest';
import Snowflake from '../src';

test('test snowflake generation 1', () => {
    const snowflake = Snowflake.generate({
        time: Date.UTC(2010, 11, 5).valueOf(),
        shard: 12,
    });
    expect(Snowflake.parse(snowflake)).toStrictEqual({
        snowflake,
        binary: '0b100101100101100111101001111110000000000000000001100000000000000',
        timestamp: 1291507200000,
        shard: 12,
        sequence: 0
    })
});

test('test snowflake generation 2', () => {
    const snowflake = Snowflake.generate({
        time: Date.UTC(2022, 2, 22).valueOf(),
        shard: 127,
    });
    expect(Snowflake.parse(snowflake)).toStrictEqual({
        snowflake,
        binary: '0b101111111101011101110110001011100000000000001111111000000000001',
        timestamp: 1647907200000,
        shard: 127,
        sequence: 1
    })
});

test('test snowflake generation with UTC 1', () => {
    const snowflake = Snowflake.generateUTC({
        time: Date.UTC(2018, 7, 8).valueOf(),
    });
    expect(Snowflake.parseUTC(snowflake)).toStrictEqual({
        snowflake,
        binary: '0b101100101000101101101010101000100000000000000000000000010',
        timestamp: 3067372800000,
        sequence: 2
    })
});
