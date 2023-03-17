import { useQuery } from 'react-query'

const fetchFromNextApi = (path: string) => {
  return fetch(`/api/${path}`)
}

export const useCarbonIntensityForecast = (country?: string) => {
  return useQuery({
    queryKey: ['carbonIntensityForecast', country],
    queryFn: async () => {
      console.log(
        `Fetching carbon intensity forecast for ${country} from Electricity Maps API`,
      )
      const response = await fetchFromNextApi(`em?country=${country}`)
      const data = await response.json()
      console.log({ data })
      return data?.res?.carbonIntensity
    },
    enabled: !!country,
  })
}
