import { Dispatch, SetStateAction, useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = (
  key: string,
  initialValue: string
): [string | null, Dispatch<SetStateAction<string | null>>] => {
  const [state, setState] = useState<string | null>(initialValue);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(key);
        if (jsonValue !== null) {
          setState(JSON.parse(jsonValue));
        }
      } catch (error) {
        console.error('Error reading value from AsyncStorage:', error);
      }
    };

    fetchData();
  }, [key]);

  const saveData = async (value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      setState(value);
    } catch (error) {
      console.error('Error saving value to AsyncStorage:', error);
    }
  };

  return [state, saveData];
};

export default useAsyncStorage;
