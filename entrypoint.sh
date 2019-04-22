#!/bin/bash

echo "here on entrypoint";
ls -l
echo "babab ji k butti"
# Run Behat with parameters passed using CMD.

# Start selenium server and trash the verbose error messages from webdriver


        echo "Launching in debug mode... chrome version...99900+++"  
        #./node_modules/.bin/webdriver-manager update --gecko false         
        #./node_modules/.bin/webdriver-manager update --gecko false --versions.chrome 2.34 
        #./node_modules/.bin/webdriver-manager start --standalone &

         echo "inside else... if config ...comm  "       

          pwd
         #./node_modules/.bin/webdriver-manager update
        #./node_modules/.bin/webdriver-manager update --chrome false  2>/dev/null
        #./node_modules/.bin/webdriver-manager start 2>/dev/null &
# Wait 3 seconds for port 4444 to be listening connections
#while ! nc -z 127.0.0.1 4444; do echo "Waiting for selenium on 127.0.0.1"; sleep 3; done
echo "Waiting for selenium on ....";
sleep 20;

# run the tests
echo "sai Ram......++++++"
#Extra line added in the script to run all command line arguments
#exec "$@";
./node_modules/.bin/protractor conf.js
#./node_modules/.bin/$*
#node_modules/.bin/protractor "$@" --disableChecks
echo "shut down selenium driver .........000000llll"
#./node_modules/.bin/webdriver-manager shutdown
#Now force shut
#pkill -f webdriver-manager 2>/dev/null &
#pkill -f "test-type=webdriver" 2>/dev/null &

