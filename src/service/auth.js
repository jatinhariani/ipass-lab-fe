import app from '../main';

export default {
    requestOtp(phoneNumber) {
        return app.axios({
            method: 'post',
            url: 'send_otp',
            data: {
                account_type: 'PATHOLOGY_LAB',
                identifier: phoneNumber,
                identifierType: 'MOBILE'
            }
        });
    }
};
