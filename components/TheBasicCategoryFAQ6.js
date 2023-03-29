import React from 'react';

const TheBasicCategoryFAQ6 = () => {
    return (
        <div>
            <h1 className='font-bold'>Bursement Smart Wallet do support the following incoming payment methods: </h1>
            <br />
            <ul>
                <li>* International Transfers are to be paid in through our SWIFT account details - to be requested in-app</li>
                <li>* Local FAST transfers</li>
                <li>* Local GIRO transfers (inbound only)</li>
            </ul>
            <br />
            <h2 className='font-bold'>Note that Bursement Smart Wallet do not support: </h2>
            <br />
            <ul>
                <li>* Cash Deposit/Withdrawals;</li>
                <li>* Cheques;</li>
                <li>* PayNow;*</li>
                <li>* Direct Debit Authorizations; and</li>
                <li>* Outbound GIROs.</li>
            </ul>
        </div>
    );
};

export default TheBasicCategoryFAQ6;
