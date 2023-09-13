import React, { useState, useEffect } from 'react';
import { Provider, constants } from 'starknet';

function App() {
  const [blockData, setBlockData] = useState(null);
  const provider = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } });

  useEffect(() => {
    const getBlock1000 = async () => {
      try {
        const response = await provider.getBlock(1000);
        setBlockData(response.block);
      } catch (error) {
        console.error('Failed to fetch block:', error);
      }
    };

    getBlock1000();
  }, [provider]);

  return (
    <div>
      {blockData ? (
        <div>
          This is current block number: 1000
          <pre>{JSON.stringify(blockData, null, 2)}</pre>
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
}

export default App;
