import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../theme/Theme';
import Button from '../ui-elements/Button';
import AntDesignSvg from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo';
function ModalTester() {
  const styles = makeStyles(theme);
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const RenderIconButton = ({
    styleProps,
    buttonText,
    buttonColor,
    iconName,
    color,
  }) => {
    return (
      <TouchableHighlight
        style={[styles.buttonWrapper, styleProps, {backgroundColor: color}]}>
        <View style={styles.buttonContent}>
          <View style={styles.svgWrapper}>
            <AntDesignSvg name={iconName} size={30} color={color} />
          </View>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <>
      <TouchableOpacity onPress={toggleModal} style={styles.alignCenter}>
        <EntypoIcon name="dots-three-vertical" size={20} />
      </TouchableOpacity>

      <Modal isVisible={isModalVisible} style={styles.modalStyle}>
        <View style={{flex: 1}}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={toggleModal}
              style={styles.closeButtonStyle}>
              <AntDesignSvg name="closecircle" size={18} color={'#e53935'} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalProfileInfo}>
            <View style={styles.profilePicWrapper}>
              <Image
                style={styles.profilePic}
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
                }}
              />
            </View>
            <Text style={styles.memberNameText}>Mehmet Çetin</Text>
          </View>
          <Text style={styles.optionsText}>Seçenekler</Text>
          <RenderIconButton
            iconName={'contacts'}
            color={'#42a5f5'}
            buttonText={'Üye Detayına Git'}
          />
          <RenderIconButton
            iconName={'deleteuser'}
            color={'#e53935'}
            buttonText={'Üyeyi sil'}
          />
        </View>
        <Button
          onPress={toggleModal}
          buttonText="Kapat"
          styleProps={{backgroundColor: '#0d47a1'}}
        />
      </Modal>
    </>
  );
}
const makeStyles = (theme: any) =>
  StyleSheet.create({
    modalStyle: {
      backgroundColor: theme.colors.mainColors.white,
      borderRadius: 16,
      padding: 24,
    },
    modalHeader: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    modalProfileInfo: {
      alignItems: 'center',
    },
    profilePicWrapper: {
      width: 160,
      height: 160,
      borderRadius: 60,
    },
    profilePic: {
      flex: 1,
      borderRadius: 30,
    },
    memberNameText: {
      ...theme.fonts.headline_3,
      textAlign: 'center',
      marginTop: 12,
      paddingHorizontal: 16,
    },
    optionsText: {
      ...theme.fonts.subtitle_2,
      color: theme.colors.textColors.black,
      marginTop: 24,
    },
    buttonWrapper: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 12,
      borderRadius: 4,
      marginTop: 12,
    },
    buttonContent: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    svgWrapper: {
      marginRight: 8,
      position: 'absolute',
      right: 0,
      backgroundColor: theme.colors.mainColors.gray,
      borderRadius: 8,
    },
    buttonText: {
      width: '100%',
      ...theme.fonts.button_1,
      fontSize: 13,
      letterSpacing: 0.2,
      color: theme.colors.textColors.white,

      marginLeft: 8,
    },
    closeButtonStyle: {
      marginLeft: 'auto',
    },
    alignCenter: {
      alignItems: 'center',
    },
  });
export default ModalTester;
