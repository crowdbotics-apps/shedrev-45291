import axios from "axios"
import { CONNECTOR_CHARGEOVER_TOKEN } from "react-native-dotenv"
const chargeOver = axios.create({
  baseURL: "https://sparkbillingservicesandbox.chargeover.com/api/v3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${CONNECTOR_CHARGEOVER_TOKEN}`
  }
})
export const apiService = {}
