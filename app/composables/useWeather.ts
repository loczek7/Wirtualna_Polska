import { ref, onMounted } from 'vue'

export const useWeather = () => {
  const OPENWEATHER_KEY = '0a13b4073062f47bfb4149852ce1b6ae'
  const DEFAULT_CITY = 'Warszawa'

  const city = ref(DEFAULT_CITY)
  const temperature = ref<string>('–')
  const icon = ref('')
  const description = ref('')
  const isLoading = ref(false)

  const apiUrl = (cityName: string) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${OPENWEATHER_KEY}&units=metric&lang=pl`

  const iconUrl = (code: string) => `https://openweathermap.org/img/wn/${code}@2x.png`

  const loadCity = async (cityName: string) => {
    try {
      isLoading.value = true
      temperature.value = '…'
      const res = await fetch(apiUrl(cityName))
      if (!res.ok) throw new Error(`API: ${res.status}`)
      const data = await res.json()

      if (!data || !data.main || typeof data.main.temp !== 'number') {
        throw new Error('Invalid API response')
      }

      const tempC = Math.round(data.main.temp)
      const iconCode = data.weather && data.weather[0] ? data.weather[0].icon : '01d'
      const newCityName = data.name || cityName

      city.value = newCityName
      temperature.value = String(tempC)
      icon.value = iconUrl(iconCode)
      description.value = data.weather && data.weather[0] ? data.weather[0].description : 'Pogoda'
    } catch (err) {
      temperature.value = '–'
      icon.value = iconUrl('10d')
      description.value = 'Brak danych'
      console.warn('Weather error:', err)
    } finally {
      isLoading.value = false
    }
  }

  onMounted(() => {
    loadCity(DEFAULT_CITY)
  })

  return {
    city,
    temperature,
    icon,
    description,
    isLoading,
    loadCity
  }
}

