import { View, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

type ParamsProps = {
  name: string;
}

export function ScreenB() {
  const route = useRoute();
  const navigation = useNavigation();
  const { name } = route.params as ParamsProps;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: 'white',
        }}
      >
        {name}
      </Text>

      <Button 
        title="Voltar"
        onPress={() => navigation.goBack()}
      />

      
    </View>
  );
}
