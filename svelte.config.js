import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',     // 빌드 결과 폴더
      assets: 'docs',
      fallback: 'index.html',  // SPA 라우팅
      precompress: false
    }),
    paths: {
      base: ''   // 커스텀 도메인은 base path 없음
    }
  }
};

export default config;
