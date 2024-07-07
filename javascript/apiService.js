// apiService.js

const base_url = 'https://fakestoreapi.com';

export async function fetchData(endpoint) {
    try {
        const response = await fetch(`${base_url}${endpoint}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }
}
