import axios from "axios";

async function fetchData<T>(url: string) {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// tslint:disable-next-line:no-unused-expression
fetchData("some-url");
