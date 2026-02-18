import { Text, View } from "react-native";

interface profileDisplay{
    name: String;
    age: number;
}

const Profile = (
    {
        name,
        age
    }:profileDisplay
) => {
    return <View>
        <Text>Hello! My name is</Text>
        <Text>{name}, and I am {age} years old.</Text>
    </View>
}

export default Profile;