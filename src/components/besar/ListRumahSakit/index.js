import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { CardRumahSakit } from '../../kecil'


const ListRumahSakit = ({rumahsakits})=> {
    return (
      <View style={styles.container}>
         {rumahsakits.map((rumahsakits)=>{
            return(
                <CardRumahSakit key={rumahsakits.id} rumahsakit={rumahsakits}/>
            )
        }
        )}
      </View>
    )
  
}
export default ListRumahSakit;

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
})

