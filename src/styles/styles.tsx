import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    timeText: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20
    },
    timeInput: {
        // borderWidth:1,
        // width:200,
        // height:50,
        // fontSize:20,
        // borderRadius:10,
        // textAlign:'center'
        borderWidth: 1,
        borderColor: '#ccc',
        width: 140,
        textAlign: 'center',
        marginBottom: 16,
        borderRadius: 6,
        fontSize: 19,
    },
    btnstart: {
        backgroundColor: '#1f9819ff',
        borderWidth: 1,
        borderRadius: 6,
        width: 140,
        marginBottom: 8,
        paddingHorizontal: 30,
        paddingVertical: 6
    },
    btnstop: {
        backgroundColor: '#ff0000ff',
        borderWidth: 1,
        borderRadius: 6,
        width: 140,
        marginBottom: 8,
        paddingHorizontal: 30,
        paddingVertical: 6
    },
    btnreset: {
        backgroundColor: '#969c2fff',
        borderWidth: 1,
        borderRadius: 6,
        width: 140,
        marginBottom: 8,
        paddingHorizontal: 30,
        paddingVertical: 6
    },
    btntext: {
        fontSize: 19,
        textAlign: 'center',
        color: 'white',

    }
});
