import React, { FC, ReactElement, useEffect, useState } from 'react'
import BlockCard from '../../components/BlockCard/index';
import TransactionsOfBlock from '../../components/transactions';
import InfoText from './InfoText';
import { BlockchainService } from '../../modules/blockchain';

const Home: FC<{}> = (): ReactElement => {
  const [blockchain, setBlockchain] = useState([])

  useEffect(() => {
    setBlockchain(BlockchainService.prototype.getBlocks());
  }, [])
    return (
        <div>
            <InfoText />
            {blockchain.map((block) => (
                <BlockCard block={block} />
            ))}
            <TransactionsOfBlock />
        </div>
    );
}

export default Home
