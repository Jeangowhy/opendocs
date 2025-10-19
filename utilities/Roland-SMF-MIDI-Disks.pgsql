-- https://chiptune.app/browse/Roland%20SMF%20MIDI%20Disks
CREATE TABLE albums (
    id      integer,
    name    varchar(80),
    title   varchar(255)
);
ALTER TABLE albums ADD PRIMARY KEY (id);
ALTER TABLE albums ALTER COLUMN id SET NOT NULL;
ALTER TABLE albums ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY;
ALTER TABLE albums ADD CONSTRAINT unique_album_name UNIQUE (name);

CREATE TABLE songs (
    id      SERIAL PRIMARY KEY,
    album   varchar(80) REFERENCES albums(name),
    title   varchar(255)
);

INSERT INTO albums (name, title) VALUES ('Roland SMF', 'TITLE''s value');
UPDATE albums SET name='Roland SMF MIDI Disks', title='86 disks, 756 PCS' WHERE id=1;

INSERT INTO albums (name, title) VALUES
('RJL-1003J', 'House Hits- (1991) (Satoru Wono) +8PCS'),
('RJL-2006J', 'New Concept in Reggae (1992) (Pendulum) +8PCS');

INSERT INTO songs (album, title) VALUES
('RJL-1003J', 'L1003_01 - Gonna Make You Sweat.MID'),
('RJL-1003J', 'L1003_02 -Everybody Everybody.MID'),
('RJL-1003J', 'L1003_03 - Talking with Myself.MID'),
('RJL-1003J', 'L1003_04 - Gypsy Woman.MID'),
('RJL-1003J', 'L1003_05 - Computerlove.MID'),
('RJL-1003J', 'L1003_06 - Love And Life.MID'),
('RJL-1003J', 'L1003_07 - Pacific 202.MID'),
('RJL-1003J', 'L1003_08 - What Time Is Love.MID');

INSERT INTO songs (album, title) VALUES
('RJL-2006J', 'L2006_01 - Get Up Stand Up.MID'),
('RJL-2006J', 'L2006_02 - No Woman No Cry.MID'),
('RJL-2006J', 'L2006_03 - I Shot the Sheriff.MID'),
('RJL-2006J', 'L2006_04 - Jamming.MID'),
('RJL-2006J', 'L2006_05 - Is This Love.MID'),
('RJL-2006J', 'L2006_06 - Bongo Man.MID'),
('RJL-2006J', 'L2006_07 - Many Rivers to Cross.MID'),
('RJL-2006J', 'L2006_08 - Vietnam.MID');

-- SELECT conname, conrelid::regclass FROM pg_constraint
--     WHERE conrelid = 'songs'::regclass;
-- ALTER TABLE songs  DROP CONSTRAINT songs_album_fkey;
ALTER TABLE albums DROP CONSTRAINT unique_album_name CASCADE;
INSERT INTO songs (album, title) VALUES
('RJL-1005J', 'L1005_01 - Have Yourself a Merry Little Christmas.MID'),
('RJL-1005J', 'L1005_02 - What Child Is This.MID'),
('RJL-1005J', 'L1005_03 - Sleigh Ride.MID'),
('RJL-1005J', 'L1005_04 - Ave Maria.MID'),
('RJL-1005J', 'L1005_05 - Silver Bells.MID'),
('RJL-1005J', 'L1005_06 - The Gift [Simple Gifts].MID'),
('RJL-1005J', 'L1005_07 - O Come, All Ye Faithful [Adeste Fideles].MID'),
('RJL-1005J', 'L1005_08 - O Tannenbaum [O Christmas Tree].MID'),
('RJL-1005J', 'L1005_09 - The Christmas Song.MID'),
('RJL-1005J', 'L1005_10 - The Little Drummer Boy.MID');

SELECT * FROM albums;
SELECT count(*) FROM albums;
COPY (SELECT concat(a.name,(regexp_matches(a.title, '\+(\d+)PCS'))[1]),count(*)
    FROM albums a LEFT JOIN songs s ON a.name=s.album 
    GROUP BY s.album,a.title,a.name ORDER BY s.album ) 
    TO 'C:\msys64\tmp\Roland SMF MIDI Disks\dl.sh';


SELECT * FROM albums a, songs s WHERE a.name=s.album; 
SELECT * FROM albums a INNER JOIN songs s ON a.name=s.album; 
SELECT * FROM albums a LEFT JOIN songs s ON a.name=s.album; 
SELECT * FROM albums a RIGHT JOIN songs s ON a.name=s.album; 
-- LEFT/RIGHT JOIN and LEFT/RIGHT OUTER JOIN are identical

-- DELETE FROM albums WHERE id>1;
-- DELETE FROM songs;
-- DROP TABLE albums;
-- DROP TABLE songs;
