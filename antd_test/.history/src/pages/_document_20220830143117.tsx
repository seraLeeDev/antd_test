import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
    } finally {
    }
  }
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
