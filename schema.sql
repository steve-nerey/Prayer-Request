drop database if exists prayer_db;
CREATE DATABASE prayer_db;
USE prayer_db;

CREATE TABLE prayers
(id smallint unsigned not null auto_increment,
  name varchar(35) not null, 
  residence varchar(35) not null,
  request text(1000),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
  PRIMARY KEY(id)
 );

CREATE TABLE testimonies
(testimony_id smallint unsigned not null auto_increment,
  name varchar(35) not null, 
  residence varchar(35) not null,
  story text(1000),
  created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
  PRIMARY KEY(testimony_id)
 );

insert into prayers 
 (name, residence, request)
values 
('Jenny Reed', 'Jersey, NJ', 'My dad made it through surgery and the doctors say he will be fine. Please continue to pray for him, that he may have a speedy recovery and to be back up on his feet again soon.'),
('Bob Jake', 'Crescent City, CA', 'Please pray for me as I head out to the streets after almost 27 years of prison. That I may stay grounded in the word and find a steady job.'),
('Johnny Redding', 'Boston, MA', 'Please pray for my brother Hank who is in the hospital after having a heart attack and is not doing well.'),
('Robert Green', 'Miami, FL', 'Please keep my neighbor Joyce in prayer. She lost here husband in a car accident and she has no source of income.'),
('Jane Brown', 'New York, NY', 'Would you please pray for me, I always have pain in my back that extends to my feet. I have a hard time walking and getting anywhere.'),
('James Madison', 'Oakland, CA', 'I need prayer for my leg that has been hurting me since I was a kid, I hyper extended it at age 11. Thanks for your prayers.'),
('Kim Flem', 'LA, CA', 'Would you please pray for my daughter Susie who is out of control. She is hanging around the wrong crowd and is starting to get into drugs.'),
('Albert Maddon', 'Delano, CA', 'I need prayer for my girlfriend Pam who is struggling with pain in here side. Doctors do not yet know what is wrong.'),
('Nancy Rodriguez', 'Cleveland, OH', 'Please pray for my Dad Jessie who just had a stroke. He is unconscious at the moment the doctor are not saying much at the moment. Please keep him in prayer.'),
('James Jeffers', 'Bronx, NY', 'Please pray for my dog Scruffy who was attacked by my neighbors dog. He torn a hole in his side as Scruffy is just a small dog. Thanks for your prayers.');


insert into testimonies 
 (name, residence, story)
values 
('Jeff Collins', 'LA, CA', 'My sister Sue is out of the hospital and has beaten cancer. Thank you everyone for your prayers.'),
('Albert perez', 'Ontario, CA', 'I was a drug user for 15 years and The Lord delivered me from my addiction. I have since restored the relationship with my family and my faith is stronger than ever. Praise God!'),
('Pam Green', 'Orange, PA', 'I just got a new job and am no longer losing my house. Praise God! Thank you all for your prayers.'),
('Jib Jugg', 'Portland, OR', 'My Uncle Joe is out of surgery and the doctors say that he is going to be just fine. The doctors first said he was not going to make it that it was a miracle he did. Thanks for your prayers.'),
('James Sanchez', 'Napa, CA', 'My sister Ella has worked things out with here husband and are not getting a divorce. Thank you for your prayers'),
('Sue Ellis', 'Miami, FL', 'My son Bill who ran away from home is back home now. He explain a traumatic even that happened to him we did not know about. We have decided to get him the help he needs in dealing with it. Thanx for your prayers.'),
('Jeff Hong', 'Dallas, TX', 'My daughter is back from her tour from the sevice. She spoke of a miracle that saved her life as if an angel intervened stoping a mine from going off as she stepped on it. She thanks everyone who was praying for her safty.'),
('Emily Gonzales', 'Las Vegas, NV', 'I just found out that the tumor I had in my chest has now went away. The doctors do not know how that happen but I know it was God. Thank you everyone. Thanks and Praise to my Lord and Savior Jesus Christ.'),
('Stephanie Monroe', 'Pomona, CA', 'Our biggest miracle is our salvation without Jesus dying on the cross for us it would not be possible. I just wanted to post a praise report for all of us. Thank You Jesus!'),
('Jimmy Lee', 'Phenix City, AL', 'I am now able to walk after 2 years of being paralyzed. Doctors said I would never walk again but God said different. Praise God!');
