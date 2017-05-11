1. `yarn`
1. `yarn build`
    ```
    yarn build v0.23.4
    $ babel --out-dir=dist/ src/
    SyntaxError: src/index.js: The 'lodash' method `_forEach` is not a known module.
    Please report bugs to https://github.com/lodash/babel-plugin-lodash/issues.
      3 |
      4 | // reexport the symbol without defining it the local module
    > 5 | export { forEach } from 'lodash'
        | ^
      6 |
    error Command failed with exit code 1.
    ```
