import app from '../main';

console.log('app', app);

export default app => {
    return {
        fetchVoucher(voucherId) {
            return app.axios({
                method: 'post',
                url: 'vouchers/voucher_code',
                data: {
                    voucher_code: voucherId
                }
            });
        },
        redeemVoucher(voucherId) {
            return app.axios({
                method: 'post',
                url: 'vouchers/claim_voucher',
                data: {
                    voucher_code: voucherId
                }
            });
        }
    };
};
