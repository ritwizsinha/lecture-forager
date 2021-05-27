- May 8 2021
    - Added basic typescript and node dev setup
    - Worked on adding api for video upload to S3
        - Created a new AWS USER and gave it programmatic access along with S3FUllAccessPolicy
- May 9 2021
    - Tested the AWS Transcription with a lambda function
    - Added the lambda function code to the project directory
    - Each lambda function would be creating new job to the transcribe API and thus would never overload the Transcribe server.
    - The transcribe API started the job when an audio file was uploaded to and ended when it stored the transcription back into the bucket.

- May 10 2021 
    - Tried adding a database for the server to store some general information. The information is structured, currently only a video table is needed. SQL was chosen on because of easy availiblity on the AWS platform. AWS provides RDS and we can just choose the engine and the SQL server would be started. But for Mongo there were two options:
    Either use Mongo Atlas or start and EC2 server and run the mongo DB instance on it. Although Mongo Atlas is a reliable choice our performance and scale requirements were not that strict at this time that SQL vs No-SQL would make much difference given the simple schema.
    Thus went with the easy solution of starting an in house AWS SQL server. Another problem with Mongo atlas would be that for accessing the outside network like atlas our server would need some configurations for the VPC our server runs on. We would have to set up the route list for the NATTING which would be again pains with no significant gain.

- May 11, 2021
    - The RDS Postgres Server was not accepting connections from my IP although the incoming connections was set to all allowed. This was because in the database I had to specify the IP of my machine according to this Stack Overflow [post](https://stackoverflow.com/questions/61062027/aws-rds-to-pgadmin-error-saving-properties-unable-to-connect-to-server-timeout). This would have to be changed when the server is deployed to EC2 server and set up an internal network.
    - Set up the Gitflow workflow
    - Started following Clean Architecture to ensure modularity of code.

- May 17, 2021
    - Finished the design for a basic low functionality page
    - Started coding up react component for the main page
    - Found out that npm install moves up from the main working directory to search for existing packages, when I tried doing npm install in the client directory, it threw an error that the dependency tree is unresolved as an older version of webpack was present in the parent directory. What I can conclude from this that we can have 2 folders each running separate projects and their common packages could be present in the parent directory.


- May 18, 2021
    - There is an OutputKey field in the request job object for starting a 
    transcription job. This takes in the folder in which you want to store.
    [Link](https://docs.aws.amazon.com/transcribe/latest/dg/API_StartTranscriptionJob.html)
    - Had to set up lambda to access the database because the lamdbda function had to store the transcription job name for later searching through the file created b