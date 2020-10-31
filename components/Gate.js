import React from "react";
import { Text, View } from "react-native";
import { connect, useSelector } from "react-redux";

export default () => {
    const { isLoggedIn } = useSelector(state => state.usersReducer)
    return (
        <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            {isLoggedIn ? <Text>Welcome!</Text> : <Text>Login please</Text>}
        </View>
    );
};
