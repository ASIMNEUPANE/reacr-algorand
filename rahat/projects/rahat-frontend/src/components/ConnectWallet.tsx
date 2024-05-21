import { Provider, useWallet } from '@txnlab/use-wallet'
import Account from './Account'


interface ConnectWalletInterface {
  openModal: boolean
  closeModal: () => void
}

const ConnectWallet = ({ openModal, closeModal }: ConnectWalletInterface) => {
  const { providers, activeAddress } = useWallet()

  const isKmd = (provider: Provider) => provider.metadata.name.toLowerCase() === 'kmd'

  return (
    <dialog
      id="connect_wallet_modal"
      className={`fixed bg-red-500 inset-0 z-50 flex items-center justify-center ${openModal ? 'block' : 'hidden'}`}
      open
    >
      <form method="dialog" className="bg-gray-900 text-white p-8 rounded-lg shadow-lg ">
        <h3 className="font-bold text-3xl mb-6 text-center">Select Wallet Provider</h3>

        <div className="grid gap-6">
          {activeAddress && (
            <>
              <Account />
              <div className="border-b border-gray-600 my-4" />
            </>
          )}

          {!activeAddress &&
            providers?.map((provider) => (
              <button
                data-test-id={`${provider.metadata.id}-connect`}
                className="btn border border-gray-500 bg-gray-800 hover:bg-gray-700 text-white flex items-center space-x-3 py-2 px-4 rounded-lg"
                key={`provider-${provider.metadata.id}`}
                onClick={() => {
                  return provider.connect();
                }}
              >
                {!isKmd(provider) && <img alt={`wallet_icon_${provider.metadata.id}`} src={provider.metadata.icon} className="w-6 h-6" />}
                <span>{isKmd(provider) ? 'LocalNet Wallet' : provider.metadata.name}</span>
              </button>
            ))}
        </div>

        <div className="modal-action flex justify-end space-x-4 mt-8">
          <button
            data-test-id="close-wallet-modal"
            className="btn bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
            onClick={() => {
              closeModal();
            }}
          >
            Close
          </button>
          {activeAddress && (
            <button
              className="btn bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg"
              data-test-id="logout"
              onClick={() => {
                if (providers) {
                  const activeProvider = providers.find((p) => p.isActive);
                  if (activeProvider) {
                    activeProvider.disconnect();
                  } else {
                    localStorage.removeItem('txnlab-use-wallet');
                    window.location.reload();
                  }
                }
              }}
            >
              Logout
            </button>
          )}
        </div>
      </form>
    </dialog>
  );
}
export default ConnectWallet
