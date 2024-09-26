import { View, Text, ScrollView } from 'react-native'
import Header from './Header'; // Importing Header
import HorizontalSection from './HorizontalSection';
import React from 'react'
import DueSection from './DueSection';

export default function MainPage() {
  return (
    <View>
      <ScrollView >
      {/* Header */}
      <Header />
      
      <DueSection />

      {/* Issued Documents (Horizontal Scroll Section) */}
      <HorizontalSection />

      {/* Utility Section */}
      {/* <UtilitySection /> */}
      
    </ScrollView>
    </View>
  )
}