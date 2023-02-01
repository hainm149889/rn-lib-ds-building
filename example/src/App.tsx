import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import RNDSBuildingModule, { ButtonDS } from 'rn-ds-building'
import { ScreenUtils } from '../../src/helpers'
import { Themes } from '../../src/themes/Themes'

const App = () => {
  useEffect(() => {
    console.log('test log', RNDSBuildingModule)
  })
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Themes.colors.black4s,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: ScreenUtils.WIDTH_SCREEN - ScreenUtils.scale(20),
          flexDirection: 'row',
          marginHorizontal: ScreenUtils.scale(10),
        }}
      >
        <ButtonDS
          content='hello'
          onPress={() => {
            setLoading(true)
            setTimeout(() => {
              setLoading(false)
              console.log('pressed')
            }, 2000)
          }}
          isLoading={loading}
          buttonSize='small'
          buttonStyle='primary'
        />
      </View>
    </View>
  )
}

export default App
