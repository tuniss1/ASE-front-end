import axios from 'axios'

const host = process.env.NEXT_PUBLIC_HOST_API

export const getAccomodationList = async (params) => {
  return await axios.get(`${host}/accommodation/all`, { params }).then((res) => res)
}

export const filterAccommodation = async (values) => {
  return await axios.get(`${host}/accommodation/filter`, values).then((res) => res)
}
