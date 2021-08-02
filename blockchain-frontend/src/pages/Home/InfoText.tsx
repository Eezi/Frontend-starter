import React, { FC, ReactElement } from 'react'

const InfoText: FC<{}> = (): ReactElement => {
    return (
    <div className="mb-5">
       <h1 className="main-title text-xl font-mono"> Blocks on the chain</h1>
       <p className="tex-base font-mono">Cards represents a block on the chain. 
       <br /> 
       Click on a block to see the transactions of the block that are stored inside.</p>
    </div>
);
}

export default InfoText