import {downloadImage} from './download-image.js';
import {uploadImage} from './upload-image.js';

async function main(sourceUri, destinationFile, bucketName) {
    await downloadImage(sourceUri, destinationFile);

    await uploadImage(bucketName, destinationFile);
}

main(...process.argv.slice(2))
