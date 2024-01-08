import { expect, test } from 'vitest';
import Snowflake from '../src';

test('test snowflake generation', () => {
    const snowflake = Snowflake.generate({
        timestamp: Date.UTC(2010, 11, 5).valueOf(),
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