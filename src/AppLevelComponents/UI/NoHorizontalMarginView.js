import React, { Component } from 'react'
import { Text, View } from 'react-native'
import 'Helpers/global'
export default class NoHorizontalMarginView extends Component {
    render() {
        const {verticalAlso} = this.props
        return (
            
            <View style={{marginHorizontal:-global.contentPadding,marginVertical:verticalAlso? -global.contentPadding : global.contentPadding}}>
                {this.props.children}
            </View>
        )
    }
}
