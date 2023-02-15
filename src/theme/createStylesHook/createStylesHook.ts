import { useRef, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import _isEqual from 'lodash/isEqual';

import useStyleProps, { StyleProps } from './useStyleProperties';

const createStylesHook =
  <S extends StyleSheet.NamedStyles<S> | StyleSheet.NamedStyles<any>, P = undefined>(
    generateStyles: (data: StyleProps, params: P) => StyleSheet.NamedStyles<S> | S,
  ) => {
    const useStyles = ((params: P) => {
      const styleProps = useStyleProps();

      const prevParamsRef = useRef(params);

      const memoizedParams = useMemo<P>(() => {
        const isNotChanged = _isEqual(params, prevParamsRef.current);

        if (isNotChanged) {
          return prevParamsRef.current as P;
        }
        prevParamsRef.current = params;

        return params;
      }, [params]);

      const styles = useMemo(() => {
        return StyleSheet.create(generateStyles(styleProps, memoizedParams));
      }, [styleProps, memoizedParams]);

      return styles;
    }) as P extends undefined ? () => S : (params: P) => S;

    return useStyles;
  };

export default createStylesHook;
