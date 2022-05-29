import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TitleH5 } from './Typography';

type TextSliderProps = {
  words: string[]
}

function TextSlider({ words }: TextSliderProps) {
  const [textActive, setTextActive] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      if (textActive === words.length) {
        setTextActive(1);
        return;
      }
      setTextActive(textActive + 1);
    }, 3000);
  }, [textActive]);

  return (
    <Wrapper>
      <TextWrapper>
        {words.map((item, index) => <TitleH5 green className={textActive === index + 1 ? 'active' : ''} key={item}>{item}</TitleH5>)}
      </TextWrapper>
    </Wrapper>
  );
}

export default TextSlider;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TextWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 24px;

  h5 {
    position: absolute;
    display: block;
    max-width: 0px;
    transition: all 1500ms linear;
    overflow: hidden;
    white-space: nowrap;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    &.active {
      max-width: 100%;
      transition-delay: 1800ms;
    }
  }
`;
