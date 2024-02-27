import {
  ThirdwebProvider,
  ConnectWallet,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";

const smartWalletOptions = {
  factoryAddress: "YOUR_FACTORY_ADDRESS",
  gasless: true,
};

export default function App() {
  return (
    <ThirdwebProvider
      activeChain="mumbai"
      clientId="YOUR_CLIENT_ID"
      locale={en()}
      supportedWallets={[
        smartWallet(
          metamaskWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          coinbaseWallet({ recommended: true }),
          smartWalletOptions,
        ),
        smartWallet(
          walletConnect(),
          smartWalletOptions,
        ),
        smartWallet(
          localWallet(),
          smartWalletOptions,
        ),
        smartWallet(
          embeddedWallet({
            auth: {
              options: [
                "email",
                "apple",
                "facebook",
              ],
            },
          }),
          smartWalletOptions,
        ),
      ]}
      authConfig={{
        authUrl: "/api/auth",
        domain: "https://example.com",
      }}
    >
      <ConnectWallet
        theme={"dark"}
        auth={{ loginOptional: false }}
        switchToActiveChain={true}
        modalSize={"wide"}
      />
    </ThirdwebProvider>
  );
}