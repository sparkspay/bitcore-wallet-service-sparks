#!/bin/bash

grep -rl lib/ -e "_.padLeft" | xargs sed -i s@'_.padLeft'@'_.padStart'@g
grep -rl lib/ -e "_.padRight" | xargs sed -i s@'_.padRight'@'_.padEnd'@g
grep -rl lib/ -e "_.indexBy" | xargs sed -i s@'_.indexBy'@'_.keyBy'@g
grep -rl lib/ -e "_.pluck" | xargs sed -i s@'_.pluck'@'_.map'@g
grep -r lib/ -e "uniq"  | grep function | cut -d ":" -f 1 | xargs sed -i s@'_.uniq(_.flatten(_.map(definedPoints, function(p)'@'_.uniqBy(_.flatten(_.map(definedPoints, function(p)'@g
grep -rl lib/ -e "_.any" | xargs sed -i s@'_.any'@'_.some'@g


sed s@'"lodash": "^3.10.1"'@'"lodash": ">=4.7.11"'@g -i package.json
mongo bws --eval "printjson(db.dropDatabase())"