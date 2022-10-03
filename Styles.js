import React from 'react'
import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
      },
      field: {
        marginBottom: 10,
      },
      picker: {
        width: 300
      },
      title: {
        color: "#0EA5E9",
        fontSize: 40,
        textAlign: "center",
        marginBottom: 20
      },
      title2: {
        fontSize: 20,
        fontWeight: "600",
      },
      gender: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 10
      },
      result: {
        color: "#22C55E",
        fontSize: 40,
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20
      },
      weight: {
        marginTop: 5,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#D6D3D1"
      }
    });