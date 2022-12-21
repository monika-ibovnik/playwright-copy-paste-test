# playwright-copy-paste-test
a test to present the differences in clipboard events between local machine and the official microsoft playwright docker image


## installation and testing
```
yarn install
npx playwright install --with-deps
yarn test
```
for mac users: 
mac uses different modifier key for keyboard shortcuts, please use `yarn test:mac` to run the test suite on a mac machine

## running tests in docker
```
yarn docker:run
cd e2e
yarn test
```


