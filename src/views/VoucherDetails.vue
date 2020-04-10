<template>
    <div>
        <section class="page-wrap voucher-section">
            <div class="container">
                <lab-logo />
                <div class="columns">
                    <div
                        class="column is-half is-offset-one-quarter is-full-mobile"
                    >
                        <div class="voucher-details" v-if="isValid">
                            <h2 class="text-center title">
                                This voucher is assigned to:
                            </h2>
                            <div class="columns">
                                <div class="column is-full">
                                    <span
                                        class="has-text-weight-bold label is-inline-block"
                                        >Name:</span
                                    >
                                    <span>{{ voucher.user_name }}</span>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-half">
                                    <span
                                        class="has-text-weight-bold label is-inline-block"
                                        >Gender:</span
                                    >
                                    <span>M / F</span>
                                </div>
                                <div class="column is-half">
                                    <span
                                        class="has-text-weight-bold label is-inline-block"
                                        >Age:</span
                                    >
                                    <span>25</span>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-full">
                                    <span
                                        class="has-text-weight-bold label is-inline-block"
                                        >Document:</span
                                    >
                                    <span>{{ voucher.user_govt_idtype }}</span>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-full">
                                    <span
                                        class="has-text-weight-bold label is-inline-block"
                                        >Last 4 digits:</span
                                    >
                                    <span>{{
                                        voucher.user_government_id.slice(-4)
                                    }}</span>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-half">
                                    <b-button
                                        type="is-primary"
                                        @click.prevent="redeemVoucher"
                                    >
                                        Redeem
                                    </b-button>
                                </div>
                                <div class="column is-half has-text-right">
                                    <b-button @click.prevent="$router.back()">
                                        Cancel
                                    </b-button>
                                </div>
                            </div>
                        </div>
                        <div
                            class="voucher-details invalid-voucher has-text-centered"
                            v-else
                        >
                            <h2>Oops!</h2>
                            <p>Looks like this is an invalid / used voucher</p>
                            <a class="button" @click.prevent="$router.back()">
                                Go back
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import LabLogo from '../components/LabLogo.vue';
import voucherService from '../service/voucher';

// const voucherService = voucher.

export default {
    data() {
        return {
            fetching: true,
            isValid: false
        };
    },
    components: { LabLogo },
    mounted() {
        return this.fetchVoucher();
    },
    methods: {
        fetchVoucher() {
            return voucherService(this)
                .fetchVoucher(this.$route.params.id)
                .then(res => {
                    this.isValid = true;
                    this.voucher = res.data;
                    console.log(res.data);
                    this.fetching = false;
                })
                .catch(() => {
                    this.isValid = false;
                    this.fetchError = true;
                });
        },
        redeemVoucher() {
            return voucherService(this)
                .redeemVoucher(this.voucherCode)
                .then(res => {
                    console.log(res.data);
                    this.fetching = false;
                })
                .catch(() => {
                    this.fetchError = true;
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.label {
    margin-right: 1rem;
}
</style>
