import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageService {

  async storeCodes(codes: string[]) {
    const jsonValue = JSON.stringify(codes);
    await AsyncStorage.setItem('codes', jsonValue);
  }

  async getCode() : Promise<string[]> {
    const jsonValue = await AsyncStorage.getItem('codes');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  }
}

export default new AsyncStorageService()