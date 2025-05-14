import { createMiniApp } from "@farcaster/miniapp";

export default createMiniApp({
  onReady() {
    return {
      image: {
        src: "https://ipfs.io/ipfs/bafkreighrlz43fgcdmqdtyv755zmsqsn5iey5stxvicgxfygfn6mxoy474",
        aspectRatio: "1:1",
      },
      buttons: [
        {
          label: "Buy 50 $BISOU",
          action: {
            type: "swap-token",
            tokenOut: "0x951Ed6e6e75e913494C19173C30C6D3C59CffF8F",
            amountOut: "50",
            chainId: 8453,
          },
        },
        {
          label: "Buy 250 $BISOU",
          action: {
            type: "swap-token",
            tokenOut: "0x951Ed6e6e75e913494C19173C30C6D3C59CffF8F",
            amountOut: "250",
            chainId: 8453,
          },
        },
        {
          label: "Buy 500 $BISOU",
          action: {
            type: "swap-token",
            tokenOut: "0x951Ed6e6e75e913494C19173C30C6D3C59CffF8F",
            amountOut: "500",
            chainId: 8453,
          },
        },
        {
          label: "Buy Custom Amount",
          action: {
            type: "open-url",
            url: "https://app.uniswap.org/#/swap?outputCurrency=0x951Ed6e6e75e913494C19173C30C6D3C59CffF8F&chain=base",
          },
        },
      ],
    };
  },
});
