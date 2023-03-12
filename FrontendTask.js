/**
	 Задача 3: фронт
	 Вы работаете в компании, присутствующей в нескольких городах РФ. На сайте компании есть страница с контактной
	 информацией. Маркетолог поставил задачу и уехал, к его приезду задача должна быть реализована.
	 На страницу контактов заходят люди из разных городов, нужно чтобы они видели телефон из своего города. По умолчанию,
	 в HTML-страницы прописан телефон 8-800-DIGITS. Телефон размещен в верху и внизу страницы.
	 Вот и все что рассказал маркетолог прежде чем уехать.
 */

const offices = [
	{
		city: 'Moscow',
		phone: '8 800 00-00-000'
	},
	{
		city: 'Almaty',
		phone: '8 800 22-22-222'
	},
	{
		city: 'Voronezh',
		phone: '8 800 33-33-333'
	},
	{
		city: 'Prague',
		phone: '9 900 99-99-999'
	},
	{
		city: 'Amsterdam',
		phone: '9 900 66-66-666'
	}
]

class PhoneDisplay {
	selectorName = '.uc-js-phone-number .t-text'
	apiUrl = 'https://geolocation-db.com/json/'

	constructor () {
		this.drawNumber()
	}

	drawNumber() {
		this.getOffice().then(office => {
			const fields = document.querySelectorAll(this.selectorName)

			if (office) {
				fields.forEach(field => {
					field.innerHTML = office.phone
				})
			}
		})
	}

	async getOffice() {
		const cityName = await this.getCityName()

		return offices.find(office => office.city === cityName)
	}

	async getCityName() {
		return await this.fetchCity().then(data => data.city)
	}

	async fetchCity() {
		return fetch(this.apiUrl).then(e => {
			return e.json()
		})
	}
}

document.addEventListener("DOMContentLoaded", () => {
	new PhoneDisplay()
});