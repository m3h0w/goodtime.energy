// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { countryToZone } from '@/utils/zones'
import type { NextApiRequest, NextApiResponse } from 'next'
import handler from './hello'

type Data = {
  res: any
  error?: any
}

const API_KEY = process.env.ELECTRICITY_MAPS_API_KEY!
if (!API_KEY) {
  throw new Error('No API key provided')
}

const BASE_URL = 'https://api-access.electricitymaps.com/2w97h07rvxvuaa1g'

// Fetches from Electricity Maps API with API key
const fetchFromElectricityMapsWithApiKey = (path: string) => {
  console.log(`Fetching from Electricity Maps API: ${BASE_URL}${path}
  `)
  return fetch(`${BASE_URL}${path}`, {
    method: 'GET',
    headers: {
      'X-BLOBR-KEY': API_KEY,
    },
  })
}

// Uses Electricity Maps API to get current emissions for a location
const getCurrentEmissionsForLocation = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) => {
  const { country } = req.query as Partial<{
    country: string
  }>
  if (
    !country ||
    !countryToZone[country?.toLowerCase() as keyof typeof countryToZone]
  ) {
    res.status(400).json({ res: undefined, error: 'Invalid country' })
    return
  }
  const zone =
    countryToZone[country?.toLowerCase() as keyof typeof countryToZone]

  console.log({ zone })
  await fetchFromElectricityMapsWithApiKey(
    `/carbon-intensity/latest?zone=${zone}`,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log({ data })
      res.status(200).json({ res: data })
    })
    .catch((err) => {
      res.status(500).json({ res: undefined, error: err })
    })
}

export default getCurrentEmissionsForLocation
