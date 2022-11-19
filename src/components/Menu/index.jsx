import { Backdrop, Content } from "./styles/menu";

const Menu = ({ children, ...props }) => {
  return (
    <Backdrop onClick={props.click}>
      <Content {...props}>{children}</Content>
    </Backdrop>
  );
};

export default Menu;
