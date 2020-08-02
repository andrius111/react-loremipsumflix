import React, { useState, useEffect } from 'react';

import categoryRepository from '../../repositories/category';

import Template from '../../components/Template';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

const Home = () => {
  const [InitialData, setInititalData] = useState([]);

  useEffect(() => {
    categoryRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        setInititalData(categoriesWithVideos);
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        alert(error.message);
      });
  }, []);

  return (
    <Template paddingAll={0}>
      {InitialData.length === 0 && (<div>Carregando...</div>)}

      {InitialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={category.videos[0].titulo}
                url={category.videos[0].url}
                videoDescription={category.videos[0].titulo}
              />

              <Carousel
                ignoreFirstVideo
                category={category}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
      ;
    </Template>
  );
};

export default Home;
