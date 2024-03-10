import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";

const AlbumDetail = ({ album }) => {
    return (
        <View style={styles.cardContainerStyle}>
            <View style={[
                styles.thumbnailContainerStyle,
                styles.cardSectionStyle
            ]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{
                        uri: album.thumbnail_image
                    }}
                />
                <View style={styles.headerContentStyle}>
                    <Text style={styles.titleName}>{album.title}</Text>
                    <Text style={styles.artistName}>{album.artist}</Text>
                </View>
            </View>
            <View style={styles.cardSectionStyle}>
                <Image
                    style={[
                        styles.imageStyle,
                    ]}
                    source={{
                        uri: album.image
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    cardSectionStyle: {
        padding: 5,
        backgroundColor: "#A68F97",
        borderColor: "#4B4952",
        borderBottomWidth: 1,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        marginLeft: 10,
    },
    titleName: {
        fontSize: 20,
        fontWeight:"500",
    },
    artistName: {
        fontSize: 13,
    },
    cardContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#BF8D7A",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    imageStyle: {
        height: 300,
        width: null,
    }
})

export default AlbumDetail;