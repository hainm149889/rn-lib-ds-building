import * as React from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { fontGlobal, Themes } from '../../themes'
import StylesConstant from '../../themes/Constants'
import { ButtonProps } from './type'

export const ButtonDS: React.FunctionComponent<ButtonProps> = ({
  isLoading,
  isDisabled,
  content,
  contentStyles,
  containerStyle,
  children,
  ButtonLeftView,
  ButtonRightView,
  onPress,
  onBlur,
  onFocus,
  buttonStyle = 'primary',
  buttonSize = 'large',
}) => {
  /** get Button Height size */
  const getSize =
    buttonSize === 'smallSpecial' || buttonSize === 'small'
      ? StylesConstant.sizeSmall
      : buttonSize === 'medium'
      ? StylesConstant.sizeMedium
      : StylesConstant.sizeLarge

  /** get Button background color */
  const getBackgroundColor =
    buttonStyle === 'secondaryOne'
      ? Themes.colors.primary1s
      : buttonStyle === 'secondaryTwo'
      ? Themes.colors.red1s
      : Themes.colors.primary6s

  /** get Button icon background color */
  const getButtonRightBGColor =
    buttonStyle === 'secondaryOne'
      ? Themes.colors.primary6s
      : buttonStyle === 'secondaryTwo'
      ? Themes.colors.red6s
      : Themes.colors.white6

  /** get Button icon styles */
  const getButtonRightStyle =
    buttonSize === 'smallSpecial'
      ? {
          ...styles.ButtonLeftStyles,
          backgroundColor: isDisabled
            ? Themes.colors.black5s
            : getButtonRightBGColor,
          borderRadius: StylesConstant.borderRadius4,
          width: StylesConstant.iconSizeSpecial,
          height: StylesConstant.iconSizeSpecial,
        }
      : {
          ...styles.ButtonLeftStyles,
          backgroundColor: isDisabled
            ? Themes.colors.black5s
            : getButtonRightBGColor,
          borderRadius: StylesConstant.borderRadius8,
          width: StylesConstant.iconSizeMedium,
          height: StylesConstant.iconSizeMedium,
        }

  /** get Button Loading styles */
  const getButtonLoadingStyle =
    buttonSize === 'smallSpecial'
      ? {
          ...styles.ButtonLeftStyles,
          width: StylesConstant.iconSizeSpecial,
          height: StylesConstant.iconSizeSpecial,
        }
      : {
          ...styles.ButtonLeftStyles,
          width: StylesConstant.iconSizeMedium,
          height: StylesConstant.iconSizeMedium,
        }

  /** get Button Content Text styles */
  const getButtonContentStyle =
    buttonSize === 'smallSpecial'
      ? {
          ...styles.textStyle,
          ...fontGlobal.font14,
          color: isDisabled ? Themes.colors.black5s : getButtonRightBGColor,
        }
      : {
          ...styles.textStyle,
          ...fontGlobal.font16,
          color: isDisabled ? Themes.colors.black5s : getButtonRightBGColor,
        }

  return (
    <TouchableOpacity
      style={
        isDisabled
          ? {
              ...styles.disableStyle,
              maxHeight: getSize,
              minHeight: getSize,
            }
          : {
              ...styles.enableStyle,
              maxHeight: getSize,
              minHeight: getSize,
              backgroundColor: getBackgroundColor,
            }
      }
      activeOpacity={1}
      onPress={onPress}
      disabled={isDisabled}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {children ? (
        children
      ) : (
        <View style={[styles.contentStyle, containerStyle]}>
          {ButtonLeftView && !isLoading && (
            <View style={getButtonRightStyle}>{ButtonLeftView}</View>
          )}
          {isLoading && <ActivityIndicator style={getButtonLoadingStyle} />}
          {content && (
            <Text style={[getButtonContentStyle, contentStyles]}>
              {content}
            </Text>
          )}
          {ButtonRightView && (
            <View style={getButtonRightStyle}>{ButtonRightView}</View>
          )}
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  disableStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: StylesConstant.spacing8,
    borderRadius: StylesConstant.borderRadius8,
    backgroundColor: Themes.colors.black3s,
  },
  enableStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    paddingHorizontal: StylesConstant.spacing8,
    borderRadius: StylesConstant.borderRadius8,
  },
  contentStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonLeftStyles: {
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: StylesConstant.spacing8,
  },
  textStyle: {
    textAlign: 'center',
  },
})
