import fetch from 'node-fetch';
import fs from 'fs';

export const downloadImage = async (uri, filename) => {
    console.log(`Downloading ${uri}`);

    const response = await fetch(uri);

    const fileStream = fs.createWriteStream(filename)

    response.body.pipe(fileStream);
};

//downloadImage(...process.argv.slice(2));

//downloadImage('https://e22d0640933e3c7f8c86-34aee0c49088be50e3ac6555f6c963fb.ssl.cf2.rackcdn.com/0018200001060_CL_665432_default_large.jpeg', 'BLTEST_OLD.jpeg');
