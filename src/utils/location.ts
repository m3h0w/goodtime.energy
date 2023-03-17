import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'

const getCurrentLocation: () => Promise<GeolocationCoordinates> = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords)
      },
      (error) => {
        reject(error)
      },
    )
  })
}

export const useCurrentLocation = () => {
  return useQuery('location', async () => {
    const location = await getCurrentLocation()
    return location
  })
}

export const useCountry = () => {
  const { data: location, isLoading, error } = useCurrentLocation()

  return useQuery(['country', location], async () => {
    if (!location) return
    const country = await countryNameFromCoordinates(
      location.latitude,
      location.longitude,
    )
    return country
  })
}

const countryNameFromCoordinates = async (
  latitude: number,
  longitude: number,
): Promise<string> => {
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.NEXT_PUBLIC_OPENCAGE_API_KEY}`
  const response = await fetch(url)
  const data = await response.json()
  return data.results[0].components.country as string
}
