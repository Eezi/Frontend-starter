import React, { FC, ReactElement } from 'react'

const BlockCard: FC<{}> = (): ReactElement => {
    return(
        <div className="bg-white p-10 rounded-lg shadow-md max-w-md">
        <h1 className="text-xl font-bold mb-3">Block 1 (Genesis block)</h1>
        <hr />
        <div className="mt-4 mb-10">
          <p>Hash</p>
          <p>Hash of the previous block</p>
          <p>Nonce</p>
          <p>Timestamp</p>
          <div className="bg-gray-400 w-64 h-3 rounded-lg mt-2 overflow-hidden">
            <div className="bg-pink-400 w-3/4 h-full rounded-lg shadow-md"></div>
          </div>
        </div>
      </div>
    );
}

export default BlockCard