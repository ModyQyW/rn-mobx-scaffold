import * as React from "react";
import { View, Text } from "react-native"
import { observer, inject } from "mobx-react/native";
import { observable, action } from "mobx"

import styles from "./styles"

@observer
export default class HomeContainer extends React.Component<Props, State> {
	render() {
		return (
            <View style={styles.container_Home}>
                <View style={styles.viewStart}>
                    <Text>Do something to start coding!</Text>
                    <Text>做点什么, 开始打码吧!</Text>
                </View>
            </View>
        );
	}
}
