import React, { FC, ReactElement } from 'react'
import BlockCard from '../../components/BlockCard/index';
import InfoText from './InfoText';
import { BlockchainService } from '../../modules/blockchain';

const Home: FC<{}> = (): ReactElement => {
    const blocks = [];
    console.log(BlockchainService.prototype.getBlocks())
    return (
        <div>
            <InfoText />
            <BlockCard />
        </div>
    );
}

export default Home