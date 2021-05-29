## 9 Days Left

### APIS and Tasks
- /upload API => 
    - Endpoint for uploading the video, the process is using multer the video gets copied locally and use a     queueing system to add a video task to the queue, the api returns response as soon as the file gets copied locally, and then asyncrounously uploads to S3. The video id is generated and some essential fields are added to the videos Table in Postgres.
    - As soon as the video uploads locally another job is created in the queue that is to convert the video to audio.
    - Add another queue for creating a thumbnail of videos (very less priority)
    - The queues will be handled by [child](https://nodejs.org/api/child_process.html) processes in node.

- Task - Video and Audio Upload to S3.
 - Child node will be handling this using [bull](https://optimalbits.github.io/bull/) queue. Bull gives options or child nodes
 - The upload to S3 code is quite simple given we have the access keys.
 - Once the upload is done another bull queue task of downloading and converting transcriptions would be started at a delay of same time as length of video after the file is uploaded [Source](https://stackoverflow.com/a/58485467/10412693). If the job fails saying that there is no transcription of that name then it would be dropped after 3 tries.
 - This job would be downloading the transcript texts from /clean-transcriptions folder in S3 and these would convert the text to keywords using the [keyword-extractor](https://www.npmjs.com/package/keyword-extractor) library and saving the keywords to postgres which would be using [Full Text Search](https://www.postgresql.org/docs/current/textsearch.html). The id of the files would be same as the primary key in postgres which would be generated randomly at the local upload time.


- /search API =>
    - This would be implemented using the same [FTS](https://www.youtube.com/watch?v=szfUbzsKvtE) from postgres by creating a text index and returning the video ids along with descriptions filenames and keywords. (Maybe thumbnail, but no plan for now)


- /get/:videoId API
    This would get the S3 video and that transcription downloaded and would return the transcription but would stream the video

IMPLEMENT THIS UPTO Monday

POSTGRES VIDEO TABLE -> 
Id
Filename
Storage_id
Audio_id
title,
description,
posted_at,
KEYWORDS