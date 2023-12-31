import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestuarantCard from './RestuarantCard'

const FeaturedRow = ({title, description, id}) => {
  return (
    <View>
      <View className='mt-4 flex-row items-center justify-between px-4'>
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

      <ScrollView 
       horizontal
       contentContainerStyle={{
        paddingHorizontal: 15
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
     <RestuarantCard
      id={123}
      imgUrl="https://links.papareact.com/gn7"
      title="YO shushi"
      rating={4.5}
      genre="Japanese"
      address="autmn street"
      short_description="Test description"
      dishes={[]}
      long={20}
      lat={0}
     />
      <RestuarantCard
      id={123}
      imgUrl="https://links.papareact.com/gn7"
      title="YO shushi"
      rating={4.5}
      genre="Japanese"
      address="autmn street"
      short_description="Test description"
      dishes={[]}
      long={35}
      lat={0}
     />
      <RestuarantCard
      id={123}
      imgUrl="https://links.papareact.com/gn7"
      title="YO shushi"
      rating={4.5}
      genre="Japanese"
      address="autmn street"
      short_description="Test description"
      dishes={[]}
      long={42}
      lat={0}
     />

    
      </ScrollView>
    </View>
  )
}

export default FeaturedRow

