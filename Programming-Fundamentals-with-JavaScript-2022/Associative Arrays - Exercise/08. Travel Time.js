function travelTime(input) {

    let travelList = {};
    for (let el of input) {
        let [country, city, cost] = el.split(' > ');
        cost = Number(cost);
        if (!travelList.hasOwnProperty(country)) {
            travelList[country] = {};
        }
        if (travelList[country].hasOwnProperty(city)) {

            let currentPrice = travelList[country][city];
            if (cost < currentPrice) {
                travelList[country][city] = cost;
            }
        } else {
            travelList[country][city] = cost;
        }
    }
    

    let sortedCountry = Object.keys(travelList).sort((a, b) => a.localeCompare(b));
    for (let country of sortedCountry) {
        let result = "";
        result += (country + " -> ");

       let sortedCityByPrice = Object.keys(travelList[country]).sort((a,b)=>travelList[country][a] - travelList[country][b]);
 
        for (let city of sortedCityByPrice) {
            result += (city + " -> ");
            result += (travelList[country][city]+ " ");
        }
 
        console.log(result.trim());
    }
}


travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 10",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",]);

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10']);