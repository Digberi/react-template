import { CFC } from '@types';
import { InjectedConnector } from '@wagmi/core';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

export const Connector = new InjectedConnector({
  chains
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [Connector]
});

export const WagmiProvider: CFC = ({ children }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};
