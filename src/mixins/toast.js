export default {
	methods: {
		notifySuccess(message) {
			this.$root.$bvToast.toast(message, {
				title: 'SUCCESS',
				variant: 'success',
				toaster: 'b-toaster-top-right',
				solid: true,
				autoHideDelay: 5000,
				appendToast: true,
			})
		},
		notifyError(message, autohide) {
			this.$root.$bvToast.toast(message, {
				title: 'ERROR',
				variant: 'danger',
				toaster: 'b-toaster-top-right',
				solid: true,
				autoHideDelay: 5000,
				appendToast: true,
				noAutoHide: typeof(autohide) == 'undefined' ? false : true,
			})
		},
		notifyWarning(message, autohide) {
			this.$root.$bvToast.toast(message, {
				title: 'Warning',
				variant: 'warning',
				toaster: 'b-toaster-top-right',
				solid: true,
				autoHideDelay: 5000,
				appendToast: true,
				noAutoHide: typeof(autohide) == 'undefined' ? false : true,
			})
		},
		notify(message, options) {
			const noptions = {
				...options,
				title: 'SEH',
				toaster: 'b-toaster-top-right',
				solid: true,
				autoHideDelay: 5000,
				appendToast: true,
			}
			this.$root.$bvToast.toast(message, noptions)
		},
	}
}