# CTRPHipTest

#Run and publish Critical Report
protractor config.js --cucumberOpts.tags="@critical"
cat results/output.json | ./node_modules/.bin/cucumber-junit > results/cucumber_report_critical.xml
hiptest-publisher --token=391242242983884066719850326254790105094049776433589020075 --test-run-id=56255  --push="results/cucumber_report_critical.xml" --push-format=junit


#Run and publish Major Report
protractor config.js --cucumberOpts.tags="@major"
cat results/output.json | ./node_modules/.bin/cucumber-junit > results/cucumber_report_major.xml
hiptest-publisher --token=391242242983884066719850326254790105094049776433589020075 --test-run-id=56256  --push="results/cucumber_report_major.xml" --push-format=junit

#Run and publish Minor Report
protractor config.js --cucumberOpts.tags="@minor"
cat results/output.json | ./node_modules/.bin/cucumber-junit > results/cucumber_report_minor.xml
hiptest-publisher --token=391242242983884066719850326254790105094049776433589020075 --test-run-id=56257  --push="results/cucumber_report_minor.xml" --push-format=junit


