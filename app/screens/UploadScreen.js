import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import colors from '../config/colors';
import ProgressBar from 'react-native-progress/Bar';
import LottieView from 'lottie-react-native';

function UploadScreen({ progress = 0, visible = false, onAnimationFinish }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        { progress < 1 ? 
          <ProgressBar color={colors.primary} progress={progress} width={200} />
          :
          <LottieView
            autoPlay
            loop={false}
            source={require('../assets/animations/done.json')}
            style={styles.animation}
            onAnimationFinish={onAnimationFinish}
          />
        }
  
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  animation: {
    width: 150,
  }
});

export default UploadScreen;