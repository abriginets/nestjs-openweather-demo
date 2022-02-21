# Getting started

1. Install asdf by following steps 1-3 from [Getting Started section](http://asdf-vm.com/guide/getting-started.html#getting-started)
2. Install [asdf-nodejs](https://github.com/asdf-vm/asdf-nodejs/) plugin
3. Clone the repository
4. Run `asdf install` command
5. Install the dependencies with `npm i`
6. Start NestJS with `npm run build` and `npm run start`
7. Navigate to http://localhost:3001/swagger to checkout the existing endpoints

There is only single endpoint to fetch the weather forecast. You can fetch forecast 7 days ahead by just passing down latitude and longitude parameters:

```
/api/openweather/forecast/daily/lat/50.450001/lon/30.523333
```

If you'd like to fetch the weather for only a single day you'll need to specify a date query which must be in ISO8601 format (beware of enabled validation):

```
/api/openweather/forecast/daily/lat/50.450001/lon/30.523333?date=2022-02-23
```
