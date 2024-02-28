import { theme } from '@/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    // backgroundColor:"red"
  },
  text:{
    color:theme.colors.white,
    fontFamily: theme.fontFamily.medium,
    fontSize:14,
    marginTop:10
  },
  icons: {
    padding:24,
    backgroundColor: theme.colors.gray[700],
    borderRadius:22,
    borderWidth:1,
    overflow:"hidden"
  }
});