import {downloadImage} from './src/download-image.js';
import {uploadImage} from './src/upload-image.js';

const startImageProcess = async (sourceUri, destinationFile, bucketName) => {
    try {
        console.log('Downloading images.....');
        await downloadImage(sourceUri, destinationFile);

        console.log('Uploading images.....');
        await uploadImage(bucketName, destinationFile);
    } catch (error) {
        console.log('error', error);
    }
}


startImageProcess(...process.argv.slice(2));
