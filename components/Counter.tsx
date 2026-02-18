import { Button, Text, View } from "react-native";

interface iCounter{
    handleIncrement: () => void;
    handleDecrement: () => void;
    handlePass: () => void;
    value: number;
}

const Counter = (
    {
        handleIncrement, 
        handleDecrement, 
        handlePass,
        value
    }:iCounter
) => {
    return <View>
        <Text>{value}</Text>
        <Button title="Increment" onPress={handleIncrement}/>
        <Button title="Decrement" onPress={handleDecrement}/>
        <Button title="Pass Value" onPress={handlePass}/>
    </View>
}

export default Counter;