import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';


// 기본 문서 형식 지정
// bootstrap cdn 확인용으로 링크
// 서버사이드에서 단 1회만 로드
// SPA에서 변경할 수 없는 부분 
// 클라이언트의 첫 진입점. _app.js
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
                 rel="stylesheet" 
                 integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
                 crossOrigin="anonymous" />
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}