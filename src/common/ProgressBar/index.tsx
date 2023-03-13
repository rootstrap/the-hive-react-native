import React from 'react';

import { View } from 'dripsy';

import styles from './styles';
import { ProgressBarProps } from './types';

const ProgressBar: React.FunctionComponent<ProgressBarProps> = ({ currentStep, totalSteps }) => (
  <View sx={styles.container}>
    <View sx={{ ...styles.progress, width: `${(currentStep / totalSteps) * 100}%` }} />
  </View>
);

export default ProgressBar;
