import icons from '../../../assets/Icon/sprite.svg';

// eslint-disable-next-line react/prop-types
export const Icon = ({ iconName, width, height, stroke, fill }) => {
  return (
    <svg width={width} height={height}>
      <use href={`${icons}#${iconName}`} stroke={stroke} fill={fill} />
    </svg>
  );
};

/*
 Приклад використання компонента іконки
      <Icon
        iconName={'icon-arrow-left'} // назву іконки дивитись в src/assets/icons/sprite.svg
        width={'20'}   
        height={'20'} 
      />
*/
