# snowflake-id

## Install
### NPM
```
npm i github:spitliner/snowflake-id#v0.0.1-alpha
```
### YARN
```
yarn add snowflake-id@git+https://github.com/spitliner/snowflake-id.git#v0.0.1-alpha
```
## Usage

```js
import Snowflake from 'snowflake-id';

const id = Snowflake.generate() //For Twitter style snowflake

const id_UTC = Snowflake.generateUTC() //For when sharding isn't need
```
