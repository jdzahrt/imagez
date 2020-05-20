import fetch from 'node-fetch';
import fs from 'fs';

export const downloadImage = async (uri, filename) => {
    console.log(`Downloading image ${uri}`);

    const response = await fetch(uri);

    const fileStream = await fs.createWriteStream(filename)

    await new Promise((resolve, reject) => {
        response.body.pipe(fileStream);
        fileStream.on('close', resolve);
        fileStream.on('error', console.error)
    });
};
