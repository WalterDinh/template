
import {Dimensions,Platform} from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
export default {
    boxTop: {
        backgroundColor: '#E93C3C',
        width: '100%',
        height: deviceHeight * 0.5 - 25
    },
    boxBottom: {
        backgroundColor: 'white',
        width: '100%',
        height: deviceHeight * 0.5 - 25
    },
    lineCenter: {
        height: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    circleBlack: {
        backgroundColor: 'black',
        height: 154,
        alignItems: 'center',
        justifyContent: 'center',
        width: 154,
        position: 'absolute',
        borderRadius: 154 / 2,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 30
    },
    circleWhite: {
        backgroundColor: 'white',
        height: 103,
        alignItems: 'center',
        justifyContent: 'center',
        width: 103,
        borderRadius: 103 / 2
    },
    circleWhiteSmall: {
        backgroundColor: 'white',
        height: 64,
        width: 64,
        borderRadius: 64 / 2,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1,
        elevation: 30
    },
}