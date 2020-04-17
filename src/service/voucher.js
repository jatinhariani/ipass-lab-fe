export default app => {
    return {
        fetchVoucher(voucherId) {
            return app.axios({
                method: 'post',
                url: 'fetch_voucher',
                data: {
                    voucher_code: voucherId
                }
            });
        },
        redeemVoucher(voucherId) {
            return app.axios({
                method: 'post',
                url: 'redeem_voucher',
                data: {
                    voucher_code: voucherId
                }
            });
        }
    };
};
