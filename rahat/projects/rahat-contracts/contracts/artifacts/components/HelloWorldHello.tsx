/* eslint-disable no-console */
import { ReactNode, useState } from 'react'
import { HelloWorld, HelloWorldClient } from '../contracts/HelloWorldClient'
import { useWallet } from '@txnlab/use-wallet'

/* Example usage
<HelloWorldHello
  buttonClass="btn m-2"
  buttonLoadingNode={<span className="loading loading-spinner" />}
  buttonNode="Call hello"
  typedClient={typedClient}
  name={name}
/>
*/
type HelloWorldHelloArgs = HelloWorld['methods']['hello(string)string']['argsObj']

type Props = {
  buttonClass: string
  buttonLoadingNode?: ReactNode
  buttonNode: ReactNode
  typedClient: HelloWorldClient
  name: HelloWorldHelloArgs['name']
}

const HelloWorldHello = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { activeAddress, signer } = useWallet()
  const sender = { signer, addr: activeAddress! }

  const callMethod = async () => {
    setLoading(true)
    console.log(`Calling hello`)
    await props.typedClient.hello(
      {
        name: props.name,
      },
      { sender },
    )
    setLoading(false)
  }

  return (
    <button className={props.buttonClass} onClick={callMethod}>
      {loading ? props.buttonLoadingNode || props.buttonNode : props.buttonNode}
    </button>
  )
}

export default HelloWorldHello