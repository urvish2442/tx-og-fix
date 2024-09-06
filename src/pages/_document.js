import { FRONT_END_DOMAIN } from "@/constant/ogConstant";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href={`${FRONT_END_DOMAIN}/FavLogo.ico`} />
                <link
                    rel="shortcut icon"
                    href={`${FRONT_END_DOMAIN}/FavLogo.ico`}
                />
                <link rel="manifest" href="/manifest.json" />
                <script
                    src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
                    async=""
                    strategy="afterInteractive" // Load after initial render
                    defer
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
