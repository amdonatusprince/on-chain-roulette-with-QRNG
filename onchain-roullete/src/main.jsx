import React from "react";
import ReactDOM from "react-dom/client";

//wallet import
import {
  getDefaultWallets,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { jsonRpcProvider } from '@wagmi/core/providers/jsonRpc'

//routes import
import App from "./App";

//style import
import "@rainbow-me/rainbowkit/styles.css";
import "./styles/site.css";

//wagmi
const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    jsonRpcProvider({
      rpc: (polygonMumbai) => ({
        http: import.meta.env.VITE_CHAINSTACK_NODE_RPC_ENDPOINT,
      }),
    }),
  ],
)

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  // publicClient,
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider coolMode theme={midnightTheme()} chains={chains}>
      <App />
    </RainbowKitProvider>
  </WagmiConfig>
);
