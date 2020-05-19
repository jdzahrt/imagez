import gcs from '@google-cloud/storage'

export const uploadImage = async (bucketName, filename) => {
    const storage = new gcs.Storage();

    // Uploads a local file to the bucket
    await storage.bucket(bucketName).upload(filename, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        gzip: true,
        metadata: {
            // Enable long-lived HTTP caching headers
            // Use only if the contents of the file will never change
            // (If the contents will change, use cacheControl: 'no-cache')
            cacheControl: 'public, max-age=31536000',
        },
    });

    console.log(`Image: ${filename} uploaded to Bucket: ${bucketName}.`);
}

