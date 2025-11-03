/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: [
      'images.pexels.com',
      'imgcdn.stablediffusionweb.com',
      'wallpaperbat.com',
      'images.unsplash.com',
      'b.zmtcdn.com'
    ],
  },
};

export default nextConfig;
