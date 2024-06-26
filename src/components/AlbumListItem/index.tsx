import {Image, Text, View} from 'react-native';
import React from 'react';

import styles from './styles';
import {albumsData} from '@/utils/dummydata/saavn';
import {useAppTheme} from '@/hooks';
import {Fonts, Layout} from '@/theme';

interface ExtraProps {
  onPress?: () => void;
}

type AlbumListItemProps = Partial<(typeof albumsData)[number]> &
  Partial<ExtraProps>;

const AlbumListItem = (props: AlbumListItemProps) => {
  const {image, name} = props;
  const {Colors} = useAppTheme();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: image?.[2].link}}
          style={[
            Layout.fill,
            styles.artWorkImg,
            {backgroundColor: Colors.dark},
          ]}
          resizeMode="cover"
        />
      </View>
      <Text
        numberOfLines={1}
        style={[Layout.selfCenter, Fonts.textTiny, {color: Colors.titleText}]}>
        {name}
      </Text>
    </View>
  );
};

export default AlbumListItem;
