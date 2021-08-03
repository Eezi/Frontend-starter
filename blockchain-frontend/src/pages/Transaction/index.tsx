import React, { FC, ReactElement } from 'react'

const Transactions: FC<{}> = (): ReactElement => {
    return (
    <div>
        <h1 className="text-xl">Create transaction</h1>
        <p>Transfer Tomi-coin to someone!</p>
      <div className="w-full max-w-lg">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        From address
      </label>
      <input 
       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" value={'04579de8bb8f424b7a715a619cd8a78eee6cef852d861e2744061e03b7c5e34845e0dad5757b251aba2d948f53bb879df82fa51e29e580cc02b3ed87f456e481b1'}
     />
      <p className="text-grey-500 text-xs italic mt-2">This is your wallet address. You cannot change it since you can only spend your own coins.</p>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        To address
      </label>
      <input className="shadow appearance-none border border-gey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Public key..." />
      <p className="text-grey-500 text-xs italic">The address of the wallet where you want to send to. You can type random text here (if you are not interested in recovering the funds)</p>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Amount
      </label>
      <input 
        className="shadow appearance-none border border-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="150" /> 
      <p className="text-gery-500 text-xs italic">You can transfer any amount. Account balance is not checked in this demo.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign & create transaction
      </button>
    </div>
  </form>
    </div>
      </div>
);
}

export default Transactions
