import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-netlify'
import pack from 'vite-imagetools';
const { imagetools } = pack;
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      onError: 'fail'
    },
    vite: {
      server: {
        fs: {
          allow: ['studio']
        }
      },
      resolve: {
				alias: {
					$static: path.resolve('static'),
					$src: path.resolve('src')
				}
			},
			plugins: [imagetools({force: true})],
			optimizeDeps: {
				include: []
			}
    }
  },

  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}

export default config
