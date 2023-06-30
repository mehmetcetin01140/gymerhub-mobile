import React, {forwardRef, ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import theme from '../../theme/Theme';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';

type BottomSheetProps = {
  children: ReactNode;
};

const BottomSheet = forwardRef<Modalize, BottomSheetProps>(
  ({children}, ref) => {
    const styles = makeStyles(theme);

    return (
      <Portal>
        <Modalize ref={ref} modalHeight={theme.sizes.h * 0.55}>
          <ScrollView style={styles.contentWrapper}>{children}</ScrollView>
        </Modalize>
      </Portal>
    );
  },
);

export default BottomSheet;

const makeStyles = (theme: any) =>
  StyleSheet.create({
    contentWrapper: {
      paddingVertical: 15,
      paddingHorizontal: 25,
    },
  });
