import { configureChains, createClient } from '@wagmi/core'
import { arbitrum, mainnet, polygon } from '@wagmi/core/chains'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'

const chains = [arbitrum, mainnet, polygon]

// Replace project ID
const projectId = '0bb6cec1d957f7f04be82de3b98bce7d'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])

const wagmiConfig = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient,
})

const ethereumClient = new EthereumClient(wagmiConfig, chains)
const web3modal = new Web3Modal({ projectId }, ethereumClient)

console.log(web3modal)