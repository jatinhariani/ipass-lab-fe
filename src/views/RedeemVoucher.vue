<template>
    <section class="page-wrap">
        <div class="content-wrap">
            <div class="logo">
                <img src="../assets/path-logo.svg" alt />
            </div>
            <form class="log-in-form">
                <h2 class="text-center">Enter the voucher code to redeem it</h2>
                <b-field label="Voucher Code" :label-position="labelPosition">
                    <b-input v-model="voucherCode"></b-input>
                </b-field>
                <b-button type="is-primary" @click.prevent="fetchVoucher">
                    Verify
                </b-button>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            voucherCode: ''
        };
    },
    mounted() {},
    methods: {
        fetchVoucher() {
            return this.$router.push(`/voucher/${this.voucherCode}`);
        }
    }
};
</script>

<style lang="scss" scoped></style>
