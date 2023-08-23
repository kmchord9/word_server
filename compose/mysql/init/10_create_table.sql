SET GLOBAL local_infile=on;

CREATE TABLE IF NOT EXISTS `wordtable` (
    `id` INT NOT NULL AUTO_INCREMENT , 
    `word` TEXT NOT NULL , 
    `mean` TEXT NOT NULL , 
    `sentence` TEXT NOT NULL , 
    `status` INT NOT NULL , 
    PRIMARY KEY (`id`)
) ENGINE = InnoDB;



