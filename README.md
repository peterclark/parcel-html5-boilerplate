# Starter Kit

Website starter kit that contains the following:

- Parcel
- Webpack
- Pug
- Imba
- Semantic UI
- Stylus

## Getting Started

Execute the following in your terminal

1. `yarn global add imba`
2. `yarn`
3. `imbapack --watch --mode=development src/*.imba -o src/index.js`
4. `parcel src/index.pug`

### Notes

1. `yarn global add imba` will install imba globally
2. `yarn` will install dependencies
3. `imbapack ...` will convert imba files into javascript.
4. `parcel src/index.pug` will convert and bundle pug, imba and stylus into html, javascript and css assets.
