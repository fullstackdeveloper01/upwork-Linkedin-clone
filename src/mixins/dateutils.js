import moment from "moment";

export default {
    computed: {

    },
    methods: {
        formatMonthDay(d) {
            return moment(d)
                .format("MM/DD")
        },

        formatFullDate(d, inputFormat, outputFormat) {
            if (!d) {
                return '-'
            }
            if (!inputFormat) {
                inputFormat = "YYYY/MM/DD HH:mm"
            }
            if (!outputFormat) {
                outputFormat = "MM/DD/YYYY"
            }
            return moment(d, inputFormat)
                .format(outputFormat)
        }

    }

}