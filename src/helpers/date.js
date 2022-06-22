function dateFormater(unformatDate) {
	const listMonth = [
		"Jan",
		"Feb",
		"Marc",
		"Apr",
		"Mei",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Okt",
		"Nov",
		"Des"
	]
	const date = new Date(unformatDate).toLocaleString("id-ID");
	const rawDate = date.split(" ")[0];
	let [currentDate, currentMonth, currentYear] = rawDate.split("/");
	
	return `${currentYear}/${listMonth[currentMonth - 1]}/${currentDate}`;
}

export default dateFormater;