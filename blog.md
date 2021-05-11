- May 8 2021
    - Added basic typescript and node dev setup
    - Worked on adding api for video upload to S3
        - Created a new AWS USER and gave it programmatic access along with S3FUllAccessPolicy
- May 9 2021
    - Tested the AWS Transcription with a lambda function
    - Added the lambda function code to the project directory
    - Each lambda function would be creating new job to the transcribe API and thus would never overload the Transcribe server.

- May 10 2021 
    - Tried adding a database for the server to store some general information. The information is structured, currently only a video table is needed. SQL was chosen on because of easy availiblity on the AWS platform. AWS provides RDS and we can just choose the engine and the SQL server would be started. But for Mongo there were two options:
    Either use Mongo Atlas or start and EC2 server and run the mongo DB instance on it. Although Mongo Atlas is a reliable choice our performance and scale requirements were not that strict at this time that SQL vs No-SQL would make much difference given the simple schema.
    Thus went with the easy solution of starting an in house AWS SQL server. Another problem with Mongo atlas would be that for accessing the outside network like atlas our server would need some configurations for the VPC our server runs on. We would have to set up the route list for the NATTING which would be again pains with no significant gain.

- May 11, 2021
    - The RDS Postgres Server was not accepting connections from my IP although the incoming connections was set to all allowed. This was because in the database I had to specify the IP of my machine according to this Stack Overflow [post](https://stackoverflow.com/questions/61062027/aws-rds-to-pgadmin-error-saving-properties-unable-to-connect-to-server-timeout). This would have to be changed when the server is deployed to EC2 server and set up an internal network.
    - Set up the Gitflow workflow
    - Started following Clean Architecture to ensure modularity of code.