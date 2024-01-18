import Snowflake from '../src/index.js';

console.log(Snowflake.parse(Snowflake.generate({
    time: Date.UTC(2010, 11, 5).valueOf(),
    shard: 12,
})));

console.log(Snowflake.parse(Snowflake.generate({
    time: Date.UTC(1999, 1, 12).valueOf(),
    shard: 1000,
})));

console.log(Snowflake.parse(Snowflake.generate({
    time: Date.UTC(2051, 12, 2).valueOf(),
    shard: 1000,
})));
/*
for (let i = 0; i < 100; ++i) {
    console.log(Math.random() * 10 | 0);
}
*/
