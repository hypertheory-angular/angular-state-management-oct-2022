# Setup Instructions for a New Angular Project


## Linting

Here is the repo for the schematics: https://github.com/angular-eslint/angular-eslint

Run this command in a new project:

```shell
ng add @angular-eslint/schematics
```

## Prettier

The config Jeff uses

```json
{
  "plugins": ["./node_modules/prettier-plugin-multiline-arrays"],
  "singleQuote": true,
  "singleAttributePerLine": true,
  "trailingComma": "all",
  "arrowParens": "always"
}


```