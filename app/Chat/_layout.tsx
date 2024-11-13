import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Stack } from 'expo-router'

export class _layout extends Component {
  render() {
    return (
        <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    )
  }
}

export default _layout