import api from '../utils/api'
import { Preferences } from '../types';

const API_URL = '/user-preference/auth';

const savePreferences = async (preferences: Preferences) => {
    try {
        const response = await api.put(API_URL, preferences);
        return response.data.user_preferences;
    } catch (error) {
        throw new Error('Error saving preferences');
    }
};

const getPreferences = async () => {
    try {
        const response = await api.get(API_URL);
        return response.data.user_preferences;
    } catch (error) {
        throw new Error('Error fetching preferences');
    }
};

export { savePreferences, getPreferences };
