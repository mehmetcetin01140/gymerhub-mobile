import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.radioButton}
          onPress={() => onSelect(option.value)}
        >
          <FontAwesome
            name={selectedOption === option.value ? 'dot-circle-o' : 'circle-o'}
            size={20}
            color={selectedOption === option.value ? 'blue' : 'gray'}
          />
          <Text style={styles.radioButtonLabel}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioButtonLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default RadioButton;
