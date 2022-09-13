## URL Shortener API (Ursh)

### Setup!

```shell
npm i ursh
```

### Import the package!

```js
const ursh = require("ursh");
```

### Shorten A URL!

```js
(async () => {
  let url = "https://foo.bar";
  let custom = "foobar";
  let response = await ursh.add(url, custom);
  console.log(response);
  /*{
      error: false,
      key: 'foobar',
      long: 'https://foo.bar',
      short: 'https://ursh.deta.dev/foobar',
      timestamp: 1663049744100
   }*/
})();
```

### Get Details Of Shorten URL!

```js
(async () => {
  let code = "foobar";
  let response = await ursh.get(code);
  console.log(response);
  /*{
      error: false,
      key: 'foobar',
      long: 'https://foo.bar',
      short: 'https://ursh.deta.dev/foobar',
      timestamp: 1663049744100
   }*/
})();
```
