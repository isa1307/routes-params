import { View, Text } from 'react-native'
import styles from './styles'
import Title from '../../components/Title'


export default function Profile({ route }) {
 // const { user } = route.params;
  const user = route.params.user;
  return (
    <View style={styles.container}>
      <Title title={"Profile "} />
      <Text>Nome:{user.name}</Text>
      <Text>Email:{user.email}</Text>
      <Text>idade:{user.age}</Text>
    </View>
  )
}