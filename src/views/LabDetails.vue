<template>
    <section class="page-content">
        <div class="form-wrap">
            <h2>Enter the Lab Details</h2>

            <b-field label="Lab Name" :label-position="labelPosition">
                <b-input></b-input>
            </b-field>

            <b-field label="Lab Location" :label-position="labelPosition">
                <b-input></b-input>
            </b-field>

            <b-field label="Geolocation" :label-position="labelPosition">
                <b-input></b-input>
            </b-field>

            <b-field label="ICMR ID" :label-position="labelPosition">
                <b-input></b-input>
            </b-field>

            <b-field label="Lab Operating Hours">
                <b-field grouped>
                    <b-select placeholder="Opening Time">
                        <option>6 AM</option>
                        <option>7 AM</option>
                        <option>8 AM</option>
                        <option>9 AM</option>
                        <option>10 AM</option>
                    </b-select>
                    <span class="label-to">to</span>
                    <b-select placeholder="Closing Time">
                        <option>5 PM</option>
                        <option>6 PM</option>
                        <option>7 PM</option>
                        <option>8 PM</option>
                        <option>9 PM</option>
                    </b-select>
                </b-field>
            </b-field>

            <b-field label>
                <b-field grouped>
                    <b-select placeholder="Start day">
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </b-select>
                    <span class="label-to">to</span>
                    <b-select placeholder="End Day">
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        <option>Sunday</option>
                    </b-select>
                </b-field>
            </b-field>

            <table class="test-supported-table">
                <tr>
                    <th>Tests supported by the lab</th>
                    <th>Checkbox</th>
                    <th>Result turnaround time</th>
                </tr>

                <tr>
                    <td><p>PCR</p></td>
                    <td>
                        <div class="field">
                            <b-checkbox>Yes</b-checkbox>
                        </div>
                    </td>
                    <td>
                        <b-select placeholder="Turnaround time">
                            <option>----</option>
                            <option>1 day</option>
                            <option>2 days</option>
                            <option>3 days</option>
                            <option>4 days</option>
                            <option>5 days</option>
                        </b-select>
                    </td>
                </tr>

                <tr>
                    <td><p>Igg</p></td>
                    <td>
                        <div class="field">
                            <b-checkbox>Yes</b-checkbox>
                        </div>
                    </td>
                    <td>
                        <b-select placeholder="Turnaround time">
                            <option>----</option>
                            <option>1 day</option>
                            <option>2 days</option>
                            <option>3 days</option>
                            <option>4 days</option>
                            <option>5 days</option>
                        </b-select>
                    </td>
                </tr>

                <tr>
                    <td><p>Igm</p></td>
                    <td>
                        <div class="field">
                            <b-checkbox>Yes</b-checkbox>
                        </div>
                    </td>
                    <td>
                        <b-select placeholder="Turnaround time">
                            <option>----</option>
                            <option>1 day</option>
                            <option>2 days</option>
                            <option>3 days</option>
                            <option>4 days</option>
                            <option>5 days</option>
                        </b-select>
                    </td>
                </tr>
            </table>

            <hr />

            <h2>Your Details</h2>

            <b-field label="Name" :label-position="labelPosition">
                <b-input></b-input>
            </b-field>

            <b-field label="Designation" :label-position="labelPosition">
                <b-input></b-input>
            </b-field>

            <b-button type="is-primary" expanded="true" @click="submit"
                >Submit</b-button
            >
        </div>
    </section>
</template>
<script>
export default {
    data() {
        return {
            isLoading: false
        };
    },
    methods: {
        submit() {
            this.isLoading = true;
            this.$buefy.toast.open({
                duration: 5000,
                message: `Lab details updated successfully!`,
                type: 'is-success'
            });
            this.isLoading = false;
            return this.$router.push('/voucher/redeem');
        }
    }
};
</script>
<style lang="scss" scoped>
.label-to {
    margin-right: 10px;
    font-weight: 600;
    position: relative;
    top: 8px;
    font-size: 14px;
}
.button.is-primary {
    margin-top: 50px;
}
</style>
