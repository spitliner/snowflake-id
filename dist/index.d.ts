export default class Snowflake {
    #private;
    static generate({ time, epoch, shard, }?: {
        time?: number | Date;
        epoch?: number | Date;
        shard?: number;
    }): string;
    static parse(snowflake: string): {
        snowflake: string;
        binary: string;
        timestamp: number;
        shard: number;
        sequence: number;
    };
    static generateUTC({ time, }?: {
        time?: number | Date;
    }): string;
    static parseUTC(snowflake: string): {
        snowflake: string;
        binary: string;
        timestamp: number;
        sequence: number;
        shard?: undefined;
    } | {
        snowflake: string;
        binary: string;
        timestamp: number;
        shard: number;
        sequence: number;
    };
}
//# sourceMappingURL=index.d.ts.map