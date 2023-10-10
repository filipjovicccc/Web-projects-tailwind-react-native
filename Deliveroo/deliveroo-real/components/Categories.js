import React from 'react'
import {View, Text, ScrollView} from "react-native"
import CategoryCard from './CategoryCard'

function Categories() {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
    }}
    horizontal
    showHorizontalScrollIndicator={false}
    >
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 1"/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 2"/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 3"/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 4"/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 5"/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 6"/>
        <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing 7"/>
       

    </ScrollView>
  )
}

export default Categories