export default class Snowflake {
    static generate(timestamp = Date.now(), epoch = 0) {
        const timeUTC = timestamp instanceof Date ? timestamp.valueOf() : new Date(timestamp).valueOf();
        const setEpoch = epoch instanceof Date ? epoch.valueOf() : new Date(epoch).valueOf();
        console.log(timeUTC.toString(2));
        let id = (BigInt(timeUTC) - BigInt(setEpoch)) << BigInt(22);
        id |= BigInt(this.sequence++ % 65536);
        return id.toString();
    }
    static parse(snowflake) {
        try {
            const binaryValue = BigInt(snowflake).toString(2);
            console.log(binaryValue.slice(0, 41));
            return {
                binary: binaryValue,
                timestamp: new Date(Number.parseInt(binaryValue.slice(0, 41), 2)),
                sequence: Number.parseInt(binaryValue.slice(48), 2),
            };
        }
        catch {
            return {
                binary: '',
                timestamp: '',
                sequence: '',
            };
        }
    }
    static sequence = 0;
}
console.log(Snowflake.parse(Snowflake.generate()));
//# sourceMappingURL=index.js.map