#!/bin/sh
# Run tests via npm, but split our return code logic up 'til
# after the test output is echoed to the shell.

output="$(npm run test -- --watchAll=false --coverage \
    --collectCoverageFrom='src/**/*.js' \
    --collectCoverageFrom='!src/index.js' \
    --collectCoverageFrom='!src/serviceWorker.js')"

echo "$output"

if echo "$output" | egrep -q 'All files.*100.*100.*100.*100.*$'; then
    exit 0
else
    exit 1
fi
