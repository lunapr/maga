import { configureChains, createClient } from '@wagmi/core'
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'
import { EthereumClient, w3mConnectors, W3mProvider } from '@web3modal/ethereum' 
import { Web3Modal } from '@web3modal/html'

const chains = [arbitrum, mainnet, polygon]
const projectid = 'YOu.

IR_PROJECT_ID'
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
autoConnect: true,
connectors: W3mConnectors({ projectId, version: 1, chains }),
publicClient
const ethereumClient = new EthereumClient (wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)