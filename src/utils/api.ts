import axios, { AxiosRequestConfig } from "axios"

const SUBSCRIBE_ENDPOINT =
  `${import.meta.env.VITE_CRUZHACKS_ENDPOINT_URL}/email/subscribe` || ""

const API_KEY = import.meta.env.VITE_CRUZHACKS_API_KEY || ""

type SubscribeResponse = {
  status: number
  message: string
}

export function subscribeMailchimp(userEmail: string) {
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authentication: API_KEY,
    },
    params: {
      email: userEmail,
    },
  }

  return axios
    .post<SubscribeResponse>(SUBSCRIBE_ENDPOINT, null, axiosConfig)
    .then(response => ({
      status: response.status,
      data: response.data,
    }))
    .catch(err => ({
      status: null,
      data: err,
    }))
}
