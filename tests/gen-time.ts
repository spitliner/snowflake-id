import Snowflake from '../src/index.js';

console.log(Snowflake.parse(Snowflake.generate({
    timestamp: Date.UTC(2051, 10, 25).valueOf(),
    epoch: Date.UTC(1970, 0, 1).valueOf(),
    shard: 17,
})));

console.log(Snowflake.parse(Snowflake.generate({
    timestamp: Date.UTC(1999, 1, 12).valueOf(),
    epoch: Date.UTC(1970, 0, 1).valueOf(),
    shard: 1000,
})));
/*
for (let i = 0; i < 100; ++i) {
    console.log(Math.random() * 10 | 0);
}
*/
