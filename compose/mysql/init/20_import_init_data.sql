LOAD DATA LOCAL INFILE "/docker-entrypoint-initdb.d/word_test.csv"
INTO TABLE wordtable
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\r\n'