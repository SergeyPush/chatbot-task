import axios, { AxiosResponse } from 'axios';

interface Data {
  url: string;
  fileSizeBytes: number;
}

export async function getImageFromService() {
  const BASE_URL = 'https://random.dog/woof.json';
  let url = '';

  while (true) {
    const result: AxiosResponse = await axios.get(BASE_URL);
    const data: Data = result.data;
    url = data.url;
    if (url.includes('jpg') || url.includes('jpeg')) {
      break;
    }
  }
  const res: AxiosResponse = await axios.get(url, {
    responseType: 'arraybuffer',
  });

  const fileName = url.replace('https://random.dog/', '');
  return { fileName, file: res.data };
}
