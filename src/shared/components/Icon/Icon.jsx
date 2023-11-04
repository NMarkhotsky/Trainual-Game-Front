import icons from '../../../assets/Icon/sprite.svg';

// eslint-disable-next-line react/prop-types
export const Icon = ({ iconName, width, height }) => {
  return (
    <svg width={width || 20} height={height || 20}>
      <use href={`${icons}#${iconName}`} />
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
