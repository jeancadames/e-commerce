import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'rm0uyoug',
    dataset: 'production',
    apiVersion: '2023-01-08',
    useCdn: true,
    token: import.meta.env.VITE_REACT_APP_PUBLIC_TOKEN,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (src) => builder.image(src);