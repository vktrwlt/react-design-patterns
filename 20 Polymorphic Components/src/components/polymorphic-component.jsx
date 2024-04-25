import Button from "./button";

const PolymorphicComponent = (props) => {
  return (
    <div>
      <Button type="button">This is a button</Button>
      <Button as="a" href="https://google.com">
        This is a link
      </Button>
    </div>
  );
};
export default PolymorphicComponent;
