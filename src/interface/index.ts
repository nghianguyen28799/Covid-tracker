export interface ICountry {
  Country?: string;
  Slug?: string;
  ISO2?: string;
}

export interface IGetReport {
  Active?: number;
  City?: string;
  CityCode?: string;
  Confirmed?: number;
  Country?: string;
  CountryCode?: string;
  Date?: Date;
  Deaths?: number;
  ID?: string;
  Lat?: string;
  Lon?: string;
  Province?: string;
  Recovered?: number;
}

export interface IGlobalReport {
  country: string;
  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  population: number;
  continent: string;
}

export interface IReportVNDetail {
  name: string;
  cases: string;
  recovered: string;
  deaths: string;
}

export interface IReportVN {
  lastUpdated: string;
  author: string;
  portfolio: string;
  total: {
    totalCases: string;
    totalRecovered: string;
    totalDeaths: string;
  };
  detail: any;
}

export interface IDataDailyVaccine {
  date: string;
  total_vaccinations: number;
  people_vaccinated: number;
  people_fully_vaccinated: number;
  daily_vaccinations: number;
}

export interface IReportDailyVaccine {
  country: string;
  data: [IDataDailyVaccine];
}

export interface IDistributeDetail {
  name: string;
  Planned: number;
  Realistic: number;
  DistributedRate: number;
}

export interface IDataVaccineDose {
  name: string;
  vaccines: number;
  onedose: number;
  fulldose: number;
}

export interface ITotalDistribution {
  totalPlanned: number;
  totalRealistic: number;
  totalDistributedRate: number;
}
export interface IDistributeVaccine {
  lastUpdated: string;
  author: string;
  portfolio: string;
  totalDistribution: ITotalDistribution;
  dataVacDose: IDataVaccineDose;
  dataDistribution: IDistributeDetail;
}
