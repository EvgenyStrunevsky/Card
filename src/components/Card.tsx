import React from "react";
import { MyTheme } from "../styles/Theme.styled";
import { Button } from "./Button.styled";
import { Buttons, Card, Content, Image, Lid } from "./Card.styled";
import { Title } from "./Title.styled";

export const CardComponent = () => {
  return (
    <Card>
      <Image>
        <img src="/photo.jpg" alt="desert" />
      </Image>
      <Content>
        <Title>HeadLine</Title>
        <Lid>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen
        </Lid>
        <Buttons>
          <Button
            background={MyTheme.colors.buttonBackgroundPrimary}
            color={MyTheme.colors.buttonColorPrimary}
          >
            See more
          </Button>
          <Button
            background={MyTheme.colors.buttonBackgroundSecondary}
            color={MyTheme.colors.buttonColorSecondary}
            outline
          >
            Save
          </Button>
        </Buttons>
      </Content>
    </Card>
  );
};
