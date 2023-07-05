export interface IForecastDaily {
    "Headline": {
        "EffectiveDate": string;
        "EffectiveEpochDate": number;
        "Severity": number;
        "Text": string;
        "Category": string;
        "EndDate": string;
        "EndEpochDate": number;
        "MobileLink": string;
        "Link": string;
    },
    "DailyForecasts": [
        {
            "Date": string;
            "EpochDate": number;
            "Temperature": {
                "Minimum": {
                    "Value": number;
                    "Unit": string;
                    "UnitType": number;
                },
                "Maximum": {
                    "Value": number;
                    "Unit": string;
                    "UnitType": number;
                }
            },
            "Day": {
                "Icon": number;
                "IconPhrase": string;
                "HasPrecipitation": boolean;
                "PrecipitationType": string;
                "PrecipitationIntensity": string;
            },
            "Night": {
                "Icon": number;
                "IconPhrase": string;
                "HasPrecipitation": boolean;
            },
            "Sources": [
                "AccuWeather"
            ],
            "MobileLink": string;
            "Link": string;
        }
    ]
}


export interface ILocation {
    "Version": number;
    "Key": string;
    "Type": string;
    "Rank": number;
    "LocalizedName": string;
    "EnglishName": string;
    "PrimaryPostalCode": string;
    "Region": {
        "ID": string;
        "LocalizedName": string;
        "EnglishName": string;
    },
    "Country": {
        "ID": string;
        "LocalizedName": string;
        "EnglishName": string;
    },
    "AdministrativeArea": {
        "ID": string;
        "LocalizedName": string;
        "EnglishName": string;
        "Level": number;
        "LocalizedType": string;
        "EnglishType": string;
        "CountryID": string;
    },
    "TimeZone": {
        "Code": string;
        "Name": string;
        "GmtOffset": number;
        "IsDaylightSaving": boolean;
        "NextOffsetChange": string;
    },
    "GeoPosition": {
        "Latitude": number;
        "Longitude": number;
        "Elevation": {
            "Metric": {
                "Value": number;
                "Unit": string;
                "UnitType": number;
            },
            "Imperial": {
                "Value": number;
                "Unit": string;
                "UnitType": number;
            }
        }
    },
    "IsAlias": boolean;
    "SupplementalAdminAreas": [],
    "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyPollenForecast",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast",
        "Radar"
    ]
}