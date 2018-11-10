-- SELECT * FROM top_songsdb.top5000;
use top_songsdb;

-- select * from top5000 where artist = 'coolio';

-- select * from top5000 where year >= 1960 and year < 1970;

-- select * from top500 where year BETWEEN 1960 and 1970

select artist, count(*) as c from top5000 group by artist having c >2;
select * from top5000 where title='runaround sue';