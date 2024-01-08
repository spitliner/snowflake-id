export default class Snowflake {
    static generate(timestamp?: number | Date, epoch?: number | Date): string;
    static parse(snowflake: string): {
        binary: string;
        timestamp: Date;
        sequence: number;
    } | {
        binary: string;
        timestamp: string;
        sequence: string;
    };
    private static sequence;
}
//# sourceMappingURL=index.d.ts.map