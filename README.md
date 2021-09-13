# Tmall Yuanbao

## Reference

### Hooks

- [How to Replace Redux with React Hooks and the Context API](https://www.sitepoint.com/replace-redux-react-hooks-context-api/)

### Typescript React

- [typescript-cheatsheets/react](https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets)

### Fundamental

- [conventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)
- [Using lint-staged, husky, and pre-commit hooks to fail fast and early](https://codeburst.io/continuous-integration-lint-staged-husky-pre-commit-hook-test-setup-47f8172924fc)

### [Commit types](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum)

```text
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
```

## Issues

- [sort-import does not auto fix #11542](https://github.com/eslint/eslint/issues/11542)
  - Hi, thanks for the proposal. However, I don't think it would be safe for sort-imports to autofix code because it could change the evaluation order of the imported modules, which could unexpectedly affect how the code works. In general, we try to avoid having autofixes that can change the behavior of working code.

