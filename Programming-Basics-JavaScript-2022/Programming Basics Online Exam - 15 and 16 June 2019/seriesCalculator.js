function seriesCalculator(input) {
    let serName = input[0];
    let seasonNum = Number(input[1]);
    let serNum = Number(input[2]);
    let serTime = Number(input[3]);
    let timeWithoutAd = serTime * 1.20;
    let additionalTimeSpecialEpisode =  seasonNum * 10;
    let totalTime = timeWithoutAd * serNum * seasonNum + additionalTimeSpecialEpisode;
    console.log(`Total time needed to watch the ${serName} series is ${Math.floor(totalTime)} minutes.`);
}
seriesCalculator(["Riverdale",
"3",
"21",
"45"])