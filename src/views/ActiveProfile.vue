<template>
	<div>

		<a-row type="flex" :gutter="24">
			<a-col :span="24">
				<profile-information></profile-information>
			</a-col>
		</a-row>
	</div>
</template>

<script>

	import CardCredit from "../components/Cards/CardCredit"
	import WidgetSalary from "../components/Widgets/WidgetSalary"
	import CardPaymentMethods from "../components/Cards/CardPaymentMethods"
	import CardInvoices from "../components/Cards/CardInvoices"
	import CardBillingInfo from "../components/Cards/CardBillingInfo"
	import CardTransactions from "../components/Cards/CardTransactions"
	import ProfileInformation from "../components/forms/ProfileInformation.vue";


	// Salary cards data
	const salaries = [
		{
			value: 2000,
			prefix: "+$",
			icon: `
										<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
											<g id="bank" transform="translate(0.75 0.75)">
												<path id="Shape" transform="translate(0.707 9.543)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
												<path id="Path" d="M10.25,0,20.5,9.19H0Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
												<path id="Path-2" data-name="Path" d="M0,.707H20.5" transform="translate(0 19.793)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5"/>
											</g>
										</svg>`,
			title: "Total Payments",
			content: "Subscriptions",
		},

	] ;

	// "Invoices" list data.
	const invoiceData = [
		{
			title: "March, 01, 2021",
			code: "#MS-415646",
			amount: "180",
		},
		{
			title: "February, 12, 2021",
			code: "#RV-126749",
			amount: "250",
		},
		{
			title: "April, 05, 2020",
			code: "#FB-212562",
			amount: "550",
		},
		{
			title: "June, 25, 2019",
			code: "#QW-103578",
			amount: "400",
		},
		{
			title: "March, 03, 2019",
			code: "#AR-803481",
			amount: "700",
		},
	] ;

	// "Your Transactions" list data.
	const transactionsData = [
		{
			period: "NEWEST",
		},
		{
			title: "Netflix",
			datetime: "27 March 2021, at 12:30 PM",
			amount: "2,500",
			type: -1,// 0 is for pending, 1 is for deposit, -1 is for withdrawal.
			status: 'danger',
		},
		{
			title: "Apple",
			datetime: "27 March 2021, at 04:30 AM",
			amount: "2,000",
			type: 1,
			status: 'success',
		},
		{
			period: "YESTERDAY",
		},
		{
			title: "Stripe",
			datetime: "26 March 2021, at 12:30 AM",
			amount: "750",
			type: 1,
			status: 'success',
		},
		{
			title: "HubSpot",
			datetime: "26 March 2021, at 11:30 AM",
			amount: "1,050",
			type: 1,
			status: 'success',
		},
		{
			title: "Creative Tim",
			datetime: "26 March 2021, at 07:30 AM",
			amount: "2,400",
			type: 1,
			status: 'success',
		},
		{
			title: "Webflow",
			datetime: "26 March 2021, at 04:00 AM",
			amount: "Pending",
			type: 0,
			status: 'warning',
		},
	] ;

	export default ({
		components: {
			CardCredit,
			WidgetSalary,
			CardPaymentMethods,
			CardInvoices,
			CardBillingInfo,
			CardTransactions,
			ProfileInformation
		},
		data() {
			return {
				// Salary cards data
				salaries,

				// Associating "Invoices" list data with its corresponding property.
				invoiceData,
				
				// Associating "Your Transactions" list data with its corresponding property.
				transactionsData,
			}
		},
	})

</script>

<style lang="scss">
</style>