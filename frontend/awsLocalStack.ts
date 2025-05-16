// Utility to get AWS SDK v3 client config for LocalStack
// Usage: import { getAwsClientConfig } from './awsLocalStack';
// const s3 = new S3Client(getAwsClientConfig());

export function getAwsClientConfig() {
  if (process.env.LOCALSTACK === 'true') {
    return {
      endpoint: 'http://localhost:4566',
      region: 'us-east-1',
      credentials: {
        accessKeyId: 'test',
        secretAccessKey: 'test',
      },
      forcePathStyle: true,
    };
  }
  return {};
} 