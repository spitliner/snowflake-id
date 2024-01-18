import { expect, test } from 'vitest';
import Snowflake from '../src';

test('test normal snowflake generation', () => {
    const snowflake = Snowflake.generate({
        time: Date.UTC(2010, 11, 5).valueOf(),
        epoch: Date.UTC(1970, 0, 1).valueOf(),
        shard: 12,
    });
    expect(Snowflake.parse(snowflake)).toStrictEqual({
        snowflake,
        binary: '0b100101100101100111101001111110000000000000000001100000000000000',
        timestamp: new Date(Date.UTC(2010, 11, 5).valueOf()),
        shard: 12,
        sequence: 0
    })
});

test('test normal snowflake generation 1', () => {
    const snowflake = Snowflake.generate({
        time: Date.UTC(1999, 1, 12).valueOf(),
        epoch: Date.UTC(1970, 0, 1).valueOf(),
        shard: 1000,
    });
    expect(Snowflake.parse(snowflake)).toStrictEqual({
        snowflake,
        binary: '0b11010101111010110110100110011000000000001111101000000000000001',
        timestamp: new Date(Date.UTC(1999, 1, 12).valueOf()),
        shard: 1000,
        sequence: 1
    })
});

test('test normal snowflake parsing', () => {
    const snowflake = '10840108223692869632';
    expect(Snowflake.parse(snowflake)).toStrictEqual({
        snowflake,
        binary: '0b1001011001101111110011001111111100000000000000010001000000000000',
        timestamp: new Date(Date.UTC(2051, 10, 25).valueOf()),
        shard: 17,
        sequence: 0
    })
});

test('test error snowflake parsing', () => {
    const snowflake = '15bn';
    expect(Snowflake.parse(snowflake)).toStrictEqual({
        snowflake,
        binary: '',
        timestamp: 0,
        shard: 0,
        sequence: 0
    })
});