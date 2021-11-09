import React from 'react';
import styled from 'styled-components';
import { base } from '@pagerland/common/src/utils';

const StyledSvg = styled.svg`
  ${base}

  ${props => props.transform && `transform: ${props.transform};`}
`;

const Dots = props => (
  <StyledSvg viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M92 3.63158C92 5.63724 90.3741 7.26316 88.3684 7.26316C86.3628 7.26316 84.7368 5.63724 84.7368 3.63158C84.7368 1.62591 86.3628 0 88.3684 0C90.3741 0 92 1.62591 92 3.63158ZM76.2632 19.3684C78.2688 19.3684 79.8947 17.7425 79.8947 15.7368C79.8947 13.7312 78.2688 12.1053 76.2632 12.1053C74.2575 12.1053 72.6316 13.7312 72.6316 15.7368C72.6316 17.7425 74.2575 19.3684 76.2632 19.3684ZM76.2632 31.4737C78.2688 31.4737 79.8947 29.8478 79.8947 27.8421C79.8947 25.8364 78.2688 24.2105 76.2632 24.2105C74.2575 24.2105 72.6316 25.8364 72.6316 27.8421C72.6316 29.8478 74.2575 31.4737 76.2632 31.4737ZM67.7895 27.8421C67.7895 29.8478 66.1636 31.4737 64.1579 31.4737C62.1522 31.4737 60.5263 29.8478 60.5263 27.8421C60.5263 25.8364 62.1522 24.2105 64.1579 24.2105C66.1636 24.2105 67.7895 25.8364 67.7895 27.8421ZM88.3684 43.5789C90.3741 43.5789 92 41.953 92 39.9474C92 37.9417 90.3741 36.3158 88.3684 36.3158C86.3628 36.3158 84.7368 37.9417 84.7368 39.9474C84.7368 41.953 86.3628 43.5789 88.3684 43.5789ZM92 27.8421C92 29.8478 90.3741 31.4737 88.3684 31.4737C86.3628 31.4737 84.7368 29.8478 84.7368 27.8421C84.7368 25.8364 86.3628 24.2105 88.3684 24.2105C90.3741 24.2105 92 25.8364 92 27.8421ZM88.3684 19.3684C90.3741 19.3684 92 17.7425 92 15.7368C92 13.7312 90.3741 12.1053 88.3684 12.1053C86.3628 12.1053 84.7368 13.7312 84.7368 15.7368C84.7368 17.7425 86.3628 19.3684 88.3684 19.3684ZM64.1579 43.5789C66.1636 43.5789 67.7895 41.953 67.7895 39.9474C67.7895 37.9417 66.1636 36.3158 64.1579 36.3158C62.1522 36.3158 60.5263 37.9417 60.5263 39.9474C60.5263 41.953 62.1522 43.5789 64.1579 43.5789ZM55.6842 39.9474C55.6842 41.953 54.0583 43.5789 52.0526 43.5789C50.047 43.5789 48.4211 41.953 48.4211 39.9474C48.4211 37.9417 50.047 36.3158 52.0526 36.3158C54.0583 36.3158 55.6842 37.9417 55.6842 39.9474ZM76.2632 43.5789C78.2688 43.5789 79.8947 41.953 79.8947 39.9474C79.8947 37.9417 78.2688 36.3158 76.2632 36.3158C74.2575 36.3158 72.6316 37.9417 72.6316 39.9474C72.6316 41.953 74.2575 43.5789 76.2632 43.5789ZM92 52.0526C92 54.0583 90.3741 55.6842 88.3684 55.6842C86.3628 55.6842 84.7368 54.0583 84.7368 52.0526C84.7368 50.047 86.3628 48.4211 88.3684 48.4211C90.3741 48.4211 92 50.047 92 52.0526ZM64.1579 55.6842C66.1636 55.6842 67.7895 54.0583 67.7895 52.0526C67.7895 50.047 66.1636 48.4211 64.1579 48.4211C62.1522 48.4211 60.5263 50.047 60.5263 52.0526C60.5263 54.0583 62.1522 55.6842 64.1579 55.6842ZM43.5789 52.0526C43.5789 54.0583 41.953 55.6842 39.9474 55.6842C37.9417 55.6842 36.3158 54.0583 36.3158 52.0526C36.3158 50.047 37.9417 48.4211 39.9474 48.4211C41.953 48.4211 43.5789 50.047 43.5789 52.0526ZM52.0526 55.6842C54.0583 55.6842 55.6842 54.0583 55.6842 52.0526C55.6842 50.047 54.0583 48.4211 52.0526 48.4211C50.047 48.4211 48.4211 50.047 48.4211 52.0526C48.4211 54.0583 50.047 55.6842 52.0526 55.6842ZM79.8947 52.0526C79.8947 54.0583 78.2688 55.6842 76.2632 55.6842C74.2575 55.6842 72.6316 54.0583 72.6316 52.0526C72.6316 50.047 74.2575 48.4211 76.2632 48.4211C78.2688 48.4211 79.8947 50.047 79.8947 52.0526ZM88.3684 67.7895C90.3741 67.7895 92 66.1636 92 64.1579C92 62.1522 90.3741 60.5263 88.3684 60.5263C86.3628 60.5263 84.7368 62.1522 84.7368 64.1579C84.7368 66.1636 86.3628 67.7895 88.3684 67.7895ZM67.7895 64.1579C67.7895 66.1636 66.1636 67.7895 64.1579 67.7895C62.1522 67.7895 60.5263 66.1636 60.5263 64.1579C60.5263 62.1522 62.1522 60.5263 64.1579 60.5263C66.1636 60.5263 67.7895 62.1522 67.7895 64.1579ZM39.9474 67.7895C41.953 67.7895 43.5789 66.1636 43.5789 64.1579C43.5789 62.1522 41.953 60.5263 39.9474 60.5263C37.9417 60.5263 36.3158 62.1522 36.3158 64.1579C36.3158 66.1636 37.9417 67.7895 39.9474 67.7895ZM55.6842 64.1579C55.6842 66.1636 54.0583 67.7895 52.0526 67.7895C50.047 67.7895 48.4211 66.1636 48.4211 64.1579C48.4211 62.1522 50.047 60.5263 52.0526 60.5263C54.0583 60.5263 55.6842 62.1522 55.6842 64.1579ZM27.8421 67.7895C29.8478 67.7895 31.4737 66.1636 31.4737 64.1579C31.4737 62.1522 29.8478 60.5263 27.8421 60.5263C25.8364 60.5263 24.2105 62.1522 24.2105 64.1579C24.2105 66.1636 25.8364 67.7895 27.8421 67.7895ZM79.8947 64.1579C79.8947 66.1636 78.2688 67.7895 76.2632 67.7895C74.2575 67.7895 72.6316 66.1636 72.6316 64.1579C72.6316 62.1522 74.2575 60.5263 76.2632 60.5263C78.2688 60.5263 79.8947 62.1522 79.8947 64.1579ZM88.3684 79.8947C90.3741 79.8947 92 78.2688 92 76.2632C92 74.2575 90.3741 72.6316 88.3684 72.6316C86.3628 72.6316 84.7368 74.2575 84.7368 76.2632C84.7368 78.2688 86.3628 79.8947 88.3684 79.8947ZM67.7895 76.2632C67.7895 78.2688 66.1636 79.8947 64.1579 79.8947C62.1522 79.8947 60.5263 78.2688 60.5263 76.2632C60.5263 74.2575 62.1522 72.6316 64.1579 72.6316C66.1636 72.6316 67.7895 74.2575 67.7895 76.2632ZM39.9474 79.8947C41.953 79.8947 43.5789 78.2688 43.5789 76.2632C43.5789 74.2575 41.953 72.6316 39.9474 72.6316C37.9417 72.6316 36.3158 74.2575 36.3158 76.2632C36.3158 78.2688 37.9417 79.8947 39.9474 79.8947ZM55.6842 76.2632C55.6842 78.2688 54.0583 79.8947 52.0526 79.8947C50.047 79.8947 48.4211 78.2688 48.4211 76.2632C48.4211 74.2575 50.047 72.6316 52.0526 72.6316C54.0583 72.6316 55.6842 74.2575 55.6842 76.2632ZM15.7368 79.8947C17.7425 79.8947 19.3684 78.2688 19.3684 76.2632C19.3684 74.2575 17.7425 72.6316 15.7368 72.6316C13.7312 72.6316 12.1053 74.2575 12.1053 76.2632C12.1053 78.2688 13.7312 79.8947 15.7368 79.8947ZM31.4737 76.2632C31.4737 78.2688 29.8478 79.8947 27.8421 79.8947C25.8364 79.8947 24.2105 78.2688 24.2105 76.2632C24.2105 74.2575 25.8364 72.6316 27.8421 72.6316C29.8478 72.6316 31.4737 74.2575 31.4737 76.2632ZM76.2632 79.8947C78.2688 79.8947 79.8947 78.2688 79.8947 76.2632C79.8947 74.2575 78.2688 72.6316 76.2632 72.6316C74.2575 72.6316 72.6316 74.2575 72.6316 76.2632C72.6316 78.2688 74.2575 79.8947 76.2632 79.8947ZM92 88.3684C92 90.3741 90.3741 92 88.3684 92C86.3628 92 84.7368 90.3741 84.7368 88.3684C84.7368 86.3628 86.3628 84.7368 88.3684 84.7368C90.3741 84.7368 92 86.3628 92 88.3684ZM64.1579 92C66.1636 92 67.7895 90.3741 67.7895 88.3684C67.7895 86.3628 66.1636 84.7368 64.1579 84.7368C62.1522 84.7368 60.5263 86.3628 60.5263 88.3684C60.5263 90.3741 62.1522 92 64.1579 92ZM43.5789 88.3684C43.5789 90.3741 41.953 92 39.9474 92C37.9417 92 36.3158 90.3741 36.3158 88.3684C36.3158 86.3628 37.9417 84.7368 39.9474 84.7368C41.953 84.7368 43.5789 86.3628 43.5789 88.3684ZM52.0526 92C54.0583 92 55.6842 90.3741 55.6842 88.3684C55.6842 86.3628 54.0583 84.7368 52.0526 84.7368C50.047 84.7368 48.4211 86.3628 48.4211 88.3684C48.4211 90.3741 50.047 92 52.0526 92ZM19.3684 88.3684C19.3684 90.3741 17.7425 92 15.7368 92C13.7312 92 12.1053 90.3741 12.1053 88.3684C12.1053 86.3628 13.7312 84.7368 15.7368 84.7368C17.7425 84.7368 19.3684 86.3628 19.3684 88.3684ZM3.63158 92C5.63724 92 7.26316 90.3741 7.26316 88.3684C7.26316 86.3628 5.63724 84.7368 3.63158 84.7368C1.62591 84.7368 0 86.3628 0 88.3684C0 90.3741 1.62591 92 3.63158 92ZM31.4737 88.3684C31.4737 90.3741 29.8478 92 27.8421 92C25.8364 92 24.2105 90.3741 24.2105 88.3684C24.2105 86.3628 25.8364 84.7368 27.8421 84.7368C29.8478 84.7368 31.4737 86.3628 31.4737 88.3684ZM76.2632 92C78.2688 92 79.8947 90.3741 79.8947 88.3684C79.8947 86.3628 78.2688 84.7368 76.2632 84.7368C74.2575 84.7368 72.6316 86.3628 72.6316 88.3684C72.6316 90.3741 74.2575 92 76.2632 92Z"
      fill="currentColor"
    />
  </StyledSvg>
);

export default Dots;