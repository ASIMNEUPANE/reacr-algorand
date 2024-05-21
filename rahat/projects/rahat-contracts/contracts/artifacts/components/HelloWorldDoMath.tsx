/* eslint-disable no-console */
import { ReactNode, useState } from 'react'
import { HelloWorld, HelloWorldClient } from '../contracts/HelloWorldClient'
import { useWallet } from '@txnlab/use-wallet'

/* Example usage
<HelloWorldDoMath
  buttonClass="btn m-2"
  buttonLoadingNode={<span className="loading loading-spinner" />}
  buttonNode="Call doMath"
  typedClient={typedClient}
  a={a}
  b={b}
  operation={operation}
/>
*/
type HelloWorldDoMathArgs = HelloWorld['methods']['doMath(uint64,uint64,string)uint64']['argsObj']

type Props = {
  buttonClass: string
  buttonLoadingNode?: ReactNode
  buttonNode: ReactNode
  typedClient: HelloWorldClient
  a: HelloWorldDoMathArgs['a']
  b: HelloWorldDoMathArgs['b']
  operation: HelloWorldDoMathArgs['operation']
}

const HelloWorldDoMath = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false)
  const { activeAddress, signer } = useWallet()
  const sender = { signer, addr: activeAddress! }

  const callMethod = async () => {
    setLoading(true)
    console.log(`Calling doMath`)
    await props.typedClient.doMath(
      {
        a: props.a,
        b: props.b,
        operation: props.operation,
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

export default HelloWorldDoMath