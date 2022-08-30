import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {}
  render() {
    return (
      <Html lang="ko">
        <Head></Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
