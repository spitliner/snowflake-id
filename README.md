# snowflake-id

## Install
### NPM
```
npm i github:spitliner/snowflake-id#v0.0.2
```
### YARN
```
yarn add snowflake-id@git+https://github.com/spitliner/snowflake-id.git#v0.0.2
```
## Usage
### ESM
```js
import Snowflake from 'snowflake-id';

const id = Snowflake.generate() //For Twitter style snowflake

const id_UTC = Snowflake.generateUTC() //For when sharding isn't need
```
### CommonJS
```js
const Snowflake = require('snowflake-id');

const id = Snowflake.generate()

const id_UTC = Snowflake.generateUTC()
```
