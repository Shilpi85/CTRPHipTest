# CTRPHipTest

#Run and publish Critical Report
protractor config.js --cucumberOpts.tags="@critical"
cat results/output.json | ./node_modules/.bin/cucumber-junit > results/cucumber_report_critical.xml
node_modules/.bin/cucumber-js --format=json | node_modules/cucumber-junit/bin/cucumber-junit --features-as-suites > junit_output.xml
hiptest-publisher --token=391242242983884066719850326254790105094049776433589020075 --test-run-id=56255  --push="results/cucumber_report_critical.xml" --push-format=junit


#Run and publish Major Report
protractor config.js --cucumberOpts.tags="@major"
cat results/output.json | ./node_modules/.bin/cucumber-junit > results/cucumber_report_major.xml
hiptest-publisher --token=391242242983884066719850326254790105094049776433589020075 --test-run-id=54880  --push="results/cucumber_report_major.xml" --push-format=junit

#Run and publish Minor Report
protractor config.js --cucumberOpts.tags="@minor"
cat results/output.json | ./node_modules/.bin/cucumber-junit > results/cucumber_report_minor.xml
hiptest-publisher --token=391242242983884066719850326254790105094049776433589020075 --test-run-id=54882  --push="results/cucumber_report_minor.xml" --push-format=junit

npm install cucumberjs-junit --save-dev
npm install git://github.com/vincent-psarga/cucumber-junit.git --save-dev