import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IUHDProps {
  large?: boolean;
}

const IUHD = ({large = false}: IUHDProps) => {
  return (
    <Svg
      width={large ? '100' : '61'}
      height={large ? '75' : '46'}
      viewBox="0 0 61 46"
      fill="none">
      <Path
        d="M30.4308 0C30.5271 2.15322 30.6203 4.30645 30.7195 6.45967C30.7226 6.52884 30.7797 6.595 30.8609 6.77544C35.8861 7.00399 40.2256 8.91363 43.6389 12.7479C45.4252 14.7568 46.6853 17.0544 47.389 19.776H13.5088C13.8095 18.9279 14.023 18.14 14.3599 17.4092C17.2589 11.1541 22.1187 7.58741 29.0084 6.91678C30.0008 6.82055 30.3737 6.5138 30.3346 5.50335C30.2685 3.67191 30.3166 1.83746 30.3166 0.0030073C30.3557 0.0030073 30.3918 0.0030073 30.4308 0.0030073V0Z"
        fill="white"
      />
      <Path
        d="M43.4044 40.7307C43.3502 40.4631 43.2871 40.2856 43.2841 40.1052C43.2751 35.6935 43.263 31.2818 43.2991 26.8701C43.2991 26.5904 43.6871 26.0732 43.8946 26.0732C45.8704 26.0732 47.8702 25.9859 49.8189 26.2626C52.7871 26.6806 54.6607 28.488 55.0606 31.4412C55.2802 33.0561 55.1719 34.8334 54.7298 36.4002C53.8998 39.3263 51.485 40.4661 48.6581 40.7067C46.956 40.851 45.2298 40.7337 43.4044 40.7337V40.7307ZM45.6207 38.8181C48.1769 38.8933 50.6339 39.0677 52.1135 36.5656C53.2713 34.6079 53.0428 31.1314 51.7376 29.5165C50.5738 28.073 47.8191 27.4655 45.6207 28.1753V38.8181Z"
        fill="white"
      />
      <Path
        d="M36.8243 26.0883H39.155V40.7248H36.8814V34.0576C34.644 34.0576 32.5239 34.0336 30.4067 34.0967C30.2113 34.1027 29.8805 34.6471 29.8684 34.9508C29.8113 36.4454 29.8414 37.9431 29.8414 39.4407C29.8414 39.8437 29.8414 40.2467 29.8414 40.7128H27.6731V26.0943H29.8414C29.8414 27.7604 29.8774 29.3963 29.8263 31.0293C29.7993 31.8473 30.0368 32.154 30.8969 32.127C32.8336 32.0698 34.7733 32.1089 36.8243 32.1089V26.0853V26.0883Z"
        fill="white"
      />
      <Path
        d="M0.0481167 45.6627C0.0270657 45.2597 0.0120292 44.9771 0 44.6944C0.150365 44.6252 0.243591 44.544 0.342832 44.538C0.715737 44.5139 1.09165 44.5079 1.46455 44.5079C20.8165 44.5079 40.1715 44.5079 59.5234 44.5079C59.8241 44.5079 60.1429 44.4448 60.4136 44.532C60.6391 44.6072 60.8075 44.8598 61 45.0342C60.7985 45.2417 60.6301 45.5154 60.3865 45.6327C60.173 45.7349 59.8723 45.6597 59.6106 45.6597C40.1835 45.6597 20.7534 45.6597 1.32622 45.6597C0.920233 45.6597 0.517255 45.6597 0.0481167 45.6597V45.6627Z"
        fill="white"
      />
      <Path
        d="M11.9721 26.0762H14.0952C14.1253 26.5484 14.1734 26.9814 14.1764 27.4175C14.1854 30.0008 14.1403 32.584 14.1975 35.1643C14.2546 37.8227 15.4034 38.9174 17.9085 38.8452C19.9264 38.7881 21.1052 37.6604 21.1413 35.6034C21.1924 32.8727 21.1594 30.1391 21.1624 27.4085C21.1624 27.0025 21.1624 26.5965 21.1624 26.1123H23.484C23.484 26.8882 23.493 27.6641 23.484 28.437C23.4449 31.1285 23.499 33.8261 23.3186 36.5086C23.1833 38.5385 21.9112 39.985 19.9564 40.385C18.4678 40.6887 16.8198 40.6977 15.3342 40.394C13.3043 39.979 12.1044 38.4032 11.9961 36.3642C11.8337 33.3028 11.933 30.2293 11.9239 27.1619C11.9239 26.8311 11.954 26.5033 11.9751 26.0793L11.9721 26.0762Z"
        fill="white"
      />
      <Path
        d="M0.102239 21.1353C0.511231 21.1353 0.914209 21.1353 1.32019 21.1353C20.7624 21.1353 40.2045 21.1353 59.6467 21.1353C59.9474 21.1353 60.2662 21.0782 60.5369 21.1684C60.7263 21.2316 60.9639 21.4992 60.9639 21.6767C60.9639 21.8541 60.7263 22.1217 60.5369 22.1849C60.2662 22.2781 59.9444 22.233 59.6467 22.233C40.2045 22.233 20.7624 22.236 1.32019 22.221C0.727756 22.221 -0.261644 22.5428 0.102239 21.1323V21.1353Z"
        fill="white"
      />
      <Path
        d="M1.71109 24.2388C1.99077 24.0223 2.2494 23.7637 2.55614 23.6043C2.73357 23.5141 2.99822 23.5863 3.22076 23.5863C21.3848 23.5863 39.5519 23.5863 57.716 23.5863C58.1189 23.5863 58.5249 23.5863 58.9008 23.5863C59.1956 24.3441 59.0362 24.696 58.2813 24.6569C58.0197 24.6448 57.7581 24.6569 57.4934 24.6569C39.4406 24.6569 21.3878 24.6569 3.33503 24.6569C2.88995 24.6569 2.44487 24.6569 1.99979 24.6569C1.90055 24.5155 1.80432 24.3742 1.70508 24.2358L1.71109 24.2388Z"
        fill="white"
      />
      <Path
        d="M58.9551 43.1727H1.93072C1.67811 42.4991 1.78036 42.1082 2.55323 42.1412C2.6645 42.1473 2.77878 42.1412 2.89005 42.1412C21.2406 42.1412 39.5941 42.1412 57.9446 42.1412C58.5701 42.1412 59.34 42.0179 58.9521 43.1727H58.9551Z"
        fill="white"
      />
      <Path
        d="M5.71692 26.0672H7.90022V40.7218H5.71692V26.0672Z"
        fill="white"
      />
    </Svg>
  );
};

export default IUHD;