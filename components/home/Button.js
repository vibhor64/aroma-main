import { Animated, TouchableWithoutFeedback } from 'react-native'
import React, { useRef, useCallback } from 'react'
import { FontAwesome } from "@expo/vector-icons"

const Button = ({ name, size, color, onPress, style }) => {
  // Create an animated value for scaling the button
  const scale = useRef(new Animated.Value(1)).current;

   // Function to animate the scale of the button
  const animateScale = useCallback(
    (newValue)=>{
        Animated.spring(scale, { 
            toValue: newValue, 
            // Adjust the friction for the spring animation
            triction: 4,
            // Enable native driver for better performance
            useNativeDriver: true,
        }).start(); 
    },
  [scale]);

  return (
    <TouchableWithoutFeedback
      // When the button is pressed down, animate the scale to 0.6
      onPressIn={()=>animateScale(0.6)}  
      // Delay before the onPressIn event is triggered
      delayPressIn={0} 
      // When the button is released, animate the scale back to 1
      onPressOut={()=>{ 
        animateScale(1),
        // Call the onPress prop, which should be a function provided by the parent component
        onPress() 
      }}
      // Delay before the onPressOut event is triggered
      delayPressOut={100} >
        <Animated.View style={{
            height: 60, width: 60,
            backgroundColor: "white",
            elevation: 5, borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: color,
            borderWidth: 1.2,
            // Apply the animated scale transformation
            transform: [{ scale }], 
            ...style
        }}>
            <FontAwesome name={name} size={size} color={color}/>
        </Animated.View>
    </TouchableWithoutFeedback>
  )
}

export default Button