export const api = async () => {
  try {
    const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQD5vl8L6uXRG6SqFt09E-R2jHsMlw6cA2HlZUB1SurCwHccvATXErP-aQL6nnRHbV3VY1_rEaUIyYJ/pub?output=tsv')
    const text = await response.text()

    return text.split('\n').slice(1).map(row => {
      const [codInt, codOn, name, priceWeek, priceMonth, status, img] = row.split('\t')

      return {
        codInt,
        codOn,
        name,
        priceWeek: priceWeek.trim(),
        priceMonth: priceMonth.trim(),
        status,
        img
      }
    })
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
  }
}
