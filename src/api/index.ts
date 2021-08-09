import axios from "axios";

export const getCountries = () =>
  axios.get(`https://api.covid19api.com/countries`);

export const getReportByCountry = (country: string) =>
  axios.get(`https://api.covid19api.com/dayone/country/${country}`);

export const getReportGlobal = () =>
  axios.get(
    `https://api-kent.netlify.app/.netlify/functions/api/global/countries`
  );

export const getReportVN = () =>
  axios.get(`https://api-kent.netlify.app/.netlify/functions/api/vn`);

export const getReportVaccine = () =>
  axios.get(
    `https://api-kent.netlify.app/.netlify/functions/api/vn/daily/vaccines`
  );

export const getReportVaccineDistribution = () =>
  axios.get(
    `https://api-kent.netlify.app/.netlify/functions/api/vn/vaccines/distribution`
  );
