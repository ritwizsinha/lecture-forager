# search-engine-classes
A search engine used to index the class lectures uploaded to it and create a better way to study online


Some resources to start the hack:
- [Building a video search engine](https://towardsdatascience.com/building-a-video-search-engine-b93305126b59)
- [Elastic Search](https://towardsdatascience.com/building-a-video-search-engine-b93305126b59)
- [Amazon Transcribe](https://us-east-2.console.aws.amazon.com/transcribe/home?region=us-east-2#welcome)
- [Elastic Search](https://blog.logrocket.com/full-text-search-with-node-js-and-elasticsearch-on-docker/)
- [AWS Architecture for Video Upload](https://aws.amazon.com/blogs/machine-learning/analyzing-contact-center-calls-part-1-use-amazon-transcribe-and-amazon-comprehend-to-analyze-customer-sentiment/)
- [Chunking video for effecient send using HTTP]()
- [Connecting AWS Transcribe with AWS and Lambda](https://towardsdatascience.com/speech-to-text-using-aws-transcribe-s3-and-lambda-a6e88fb3a48e)
- [Clean Architecture by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
Good to have features:
1. Integration with other services like teams, google meet, webex to directly stream the current video for transcribing.
2. Partition the available video into chunks according to topics being discussed
3. Finding out keywords from the transcription and removing ordinary and common words (a developer side thing but might improve search results)
4. Adding subtitles to the video
5. Summarizing a particular chunk of transcription to create sort of notes. (text summarization)


- API ENDPOINTS THOUGHT OF

POST /video
GET /video
GET /video/multiple


TECH STACK AND OTHERS:

1. React
2. Material UI
3. Typescript
4. Webpack
5. Mongo DB
6. Node
7. Redis
8. AWS APIS
9. Docker
10. Webpack