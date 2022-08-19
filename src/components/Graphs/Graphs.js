import React from 'react';
import { BarChart, LineChart } from 'react-native-chart-kit';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function Graphs() {
    // const data = {
    //     labels: ["January", "February", "March", "April", "May", "June"],
    //     datasets: [
    //       {
    //         data: [20, 45, 28, 80, 99, 43],
    //         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
    //         strokeWidth: 2 // optional
    //       }
    //     ],
    //     legend: ["Compras"] // optional
    //   };
    //   const chartConfig = {
    //     backgroundColor: "#fff",
    //     backgroundGradientFrom: "#bbb",
    //     backgroundGradientTo: "#bbb",
    //     decimalPlaces: 2, // optional, defaults to 2dp
    //     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //     style: {
    //       borderRadius: 16
    //     },
    //     propsForDots: {
    //       r: "6",
    //       strokeWidth: "2",
    //       stroke: "#aaa"
    //     }
    //   }
    //   const height = 220
    
    //   const graphStyle = {
    //     marginVertical: 8,
    //     borderRadius: 16
    //   }
    
    
    //   return (
    //     <View style={styles.container}>
    
    //       <LineChart
    //         style={graphStyle}
    //         data={data}
    //         width={Dimensions.get("window").width}
    //         height={220}
    //         chartConfig={chartConfig}
    //       />
    
    //       <BarChart
    //         style={graphStyle}
    //         data={data}
    //         width={Dimensions.get("window").width}
    //         height={height}
    //         yAxisLabel="$"
    //         chartConfig={chartConfig}
    //         verticalLabelRotation={30}
    //       />
    
    //     </View>
    //   );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });