import React, { FC, useMemo } from 'react';
import { View } from 'react-native';

import useTheme from 'src/hooks/useTheme';

import Text from 'src/components/Text';

import {
  getToastStatusColor,
  getToastIcon,
  getToastTitle,
} from './StatusToast.utils';
import { StatusToastType } from './StatusToast.constants';
import useComponentStyles from './StatusToast.styles';

export type StatusToastProps = {
  description: string;
  type?: StatusToastType;
  title?: string;
};
const StatusToast: FC<StatusToastProps> = (props) => {
  const {
    title,
    type,
    description,
  } = props;
  const { colors } = useTheme();

  const Icon = useMemo(() => {
    return getToastIcon(type);
  }, [type]);

  const titleText = useMemo(() => {
    return getToastTitle(type, title);
  }, [title, type]);

  const statusColor = useMemo(() => {
    return getToastStatusColor(colors, type);
  }, [type]);

  const styles = useComponentStyles({ statusColor });

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          fill={colors.iconLight}
          width={20}
          height={20}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.titleText}>
          {titleText}
        </Text>

        <Text style={styles.descriptionText}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default StatusToast;
