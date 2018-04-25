const AWS = require('aws-sdk');

const s3 = new AWS.S3();

// Los nombres de buckets deben ser únicos entre todos los usuarios de S3

var bucketName = 'my.unique.bucket.name';

var myKey = 'myBucketKey';
const params = {
    Bucket: bucketName,
    Key: myKey,
    Body: 'Hello!'
};
s3.putObject(params, function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log("Successfully uploaded data to myBucket/myKey");
    }
});