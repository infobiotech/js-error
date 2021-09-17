# js-error

## scripts

```json
  "scripts": {
    "dev": "nodemon",
    "build": "rimraf build && babel ./src --out-dir build --no-comments",
    "coverage": "npm test -- --coverage",
    "docs": "documentation readme src --section=API",
    "lint": "eslint .",
    "postcoverage": "open-cli coverage/lcov-report/index.html",
    "postdocs": "git add README.md",
    "postpublish": "git push origin master --follow-tags",
    "prebuild": "npm run docs && npm run clean",
    "prerelease": "npm run lint && npm test && npm run build",
    "release": "standard-version",
    "test": "jest",
    "validate": "npm run style && npm run test"
  },
```
