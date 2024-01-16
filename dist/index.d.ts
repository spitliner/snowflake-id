export default class Snowflake {
    #private;
    static generate({ timestamp, epoch, shard, }?: {
        timestamp?: number | Date;
        epoch?: number | Date;
        shard?: number;
    }): string;
    static parse(snowflake: string): {
        snowflake: string;
        binary: string;
        timestamp: Date;
        shard: number;
        sequence: number;
    } | {
        snowflake: string;
        binary: string;
        timestamp: number;
        shard: number;
        sequence: number;
    };
}
//# sourceMappingURL=index.d.ts.map