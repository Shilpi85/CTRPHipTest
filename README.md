# CTRPHipTest

#publish Critical Report

cat results/output.json | ./node_modules/.bin/cucumber-junit > results/cucumber_report_Critical.xml
hiptest-publisher --token=391242242983884066719850326254790105094049776433589020075 --test-run-id=54881  --push="results/cucumber_report_Critical.xml" --push-format=junit


#publish Medium Priority Report

cat results/output.json | ./node_modules/.bin/cucumber-junit > results/cucumber_report_Medium.xml
hiptest-publisher --token=391242242983884066719850326254790105094049776433589020075 --test-run-id=54880  --push="results/cucumber_report_Medium.xml" --push-format=junit

#publish Low Priority Report

cat results/output.json | ./node_modules/.bin/cucumber-junit > results/cucumber_report_Low.xml
hiptest-publisher --token=391242242983884066719850326254790105094049776433589020075 --test-run-id=54882  --push="results/cucumber_report_Low.xml" --push-format=junit