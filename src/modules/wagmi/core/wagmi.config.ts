import { defaultChains } from '@modules/wagmi/config';
import { InjectedConnector, configureChains, createConfig } from '@wagmi/core';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(defaultChains, [
  publicProvider()
]);

export const Connector = new InjectedConnector({
  chains
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
  connectors: [Connector]
});

export { chains };
