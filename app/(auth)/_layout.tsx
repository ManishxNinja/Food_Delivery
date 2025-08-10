import { View, Text } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default function _layout() {
  return (
    <View>
      <Text>_layout</Text>
      <Slot />
    </View>
  )
}