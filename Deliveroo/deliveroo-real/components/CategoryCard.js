import React from 'react'
import { TouchableOpacity, View, Image, Text} from 'react-native'

function CategoryCard({imgUrl, title}) {

  //u react nativu kada se touchuju da budu dugmici sa opacity
  //da ne moramo da stavimo hover

  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{
         uri: imgUrl
      }}
      className="h-20 w-20 rounded"/>
      <Text className="absolute bottom-1 left-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard