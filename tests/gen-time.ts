import Snowflake from '../src/index.js';

console.log(Snowflake.parse(Snowflake.generate({
    timestamp: Date.UTC(2010, 11, 5).valueOf(),
    epoch: Date.UTC(1970, 0, 1).valueOf(),
    shard: 12,
})));
