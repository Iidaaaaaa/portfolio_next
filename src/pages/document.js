import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* ここにJavaScriptファイルのリンクを追加 */}
          <script src="/js/gsap.js" defer></script>
          <script src="/js/script.js" defer></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
