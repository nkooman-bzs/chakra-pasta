import { Box, Button, ButtonGroup, Heading, Image, ImageProps } from '@chakra-ui/react';
import { Content } from './components/Content';
import { Hero } from './components/Hero';
import { Navigation } from './components/Navigation';
import { NestedChakraProvider } from './components/NestedChakraProvider';
// @ts-ignore
import ImageOne from './assets/content-1.jpg';
// @ts-ignore
import ImageTwo from './assets/content-2.png';
// @ts-ignore
import ImageThree from './assets/content-3.jpg';
import { theme2 } from './theme2';

export const App = () => {
  const imagesStyles: ImageProps = {
    objectFit: 'cover',
    width: '100%',
    maxH: 400,
    filter: 'brightness(0.25)'
  };

  return (
    <Box position="relative">
      <Navigation />
      <Hero />
      <Content>
        <Heading>Stolen</Heading>
        Italian cuisine is a Mediterranean cuisine consisting of the
        ingredients, recipes and cooking techniques developed across the Italian
        Peninsula since antiquity, and later spread around the world together
        with waves of Italian diaspora. Significant changes occurred with the
        colonization of the Americas and the introduction of potatoes, tomatoes,
        capsicums, maize and sugar beet — the latter introduced in quantity in
        the 18th century. It is one of the best known and most appreciated
        gastronomies worldwide.
      </Content>
      <Image src={ImageOne} alt="" {...imagesStyles} />
      <Content bg="gray.300">
        <Heading>From</Heading>
        Italian cuisine includes deeply rooted traditions common to the whole
        country, as well as all the regional gastronomies, different from each
        other, especially between the north and the south of Italy, which are in
        continuous exchange. Many dishes that were once regional have
        proliferated with variations throughout the country. Italian cuisine
        offers an abundance of taste, and is one of the most popular and copied
        around the world. The cuisine has influenced several other cuisines
        around the world, chiefly that of the United States. One of the main
        characteristics of Italian cuisine is its simplicity, with many dishes
        made up of few ingredients, and therefore Italian cooks often rely on
        the quality of the ingredients, rather than the complexity of
        preparation. Italian cuisine is at the origin of a turnover of more than
        €200 billion worldwide.
        <ButtonGroup mt={10}>
          <Button>Press me!</Button>
          <Button variant="solid">AHHHHH</Button>
          <Button variant="outline">No, press me!</Button>
        </ButtonGroup>
      </Content>
      <Image src={ImageTwo} alt="" {...imagesStyles} />
      <Content>
        <Heading>Wikipedia</Heading>
        The Mediterranean diet forms the basis of Italian cuisine, rich in
        pasta, fish, fruits and vegetables. Cheese, cold cuts and wine are
        central to Italian cuisine, and along with coffee (especially espresso)
        form part of Italian gastronomic culture. Desserts have a long tradition
        of merging local flavours such as citrus fruits, pistachio and almonds
        with sweet cheeses like mascarpone and ricotta or exotic tastes as
        cocoa, vanilla and cinnamon. Gelato, tiramisù and cassata are among the
        most famous examples of Italian desserts, cakes and patisserie. Italian
        cuisine relies heavily on traditional products; the country has a large
        number of traditional specialities protected under EU law. Italy is the
        world's largest producer of wine, as well as a country with the widest
        variety of indigenous grapevine varieties in the world.
      </Content>
      <Image src={ImageThree} alt="" {...imagesStyles} />
      <NestedChakraProvider theme={theme2} cssVarsRoot="special">
        <Content bg="gray.300">
          <Heading>:)</Heading>
          The Mediterranean diet forms the basis of Italian cuisine, rich in
          pasta, fish, fruits and vegetables. Cheese, cold cuts and wine are
          central to Italian cuisine, and along with coffee (especially
          espresso) form part of Italian gastronomic culture. Desserts have a
          long tradition of merging local flavours such as citrus fruits,
          pistachio and almonds with sweet cheeses like mascarpone and ricotta
          or exotic tastes as cocoa, vanilla and cinnamon. Gelato, tiramisù and
          cassata are among the most famous examples of Italian desserts, cakes
          and patisserie. Italian cuisine relies heavily on traditional
          products; the country has a large number of traditional specialities
          protected under EU law. Italy is the world's largest producer of wine,
          as well as a country with the widest variety of indigenous grapevine
          varieties in the world.
        </Content>
      </NestedChakraProvider>
    </Box>
  );
};
