import React, { FC, ReactElement } from 'react'
import BlockCard from '../../components/BlockCard/index';
import InfoText from './InfoText';

const Home: FC<{}> = (): ReactElement => {
    return (
        <div>
            <InfoText />
            <BlockCard />
        </div>
    );
}

export default Home