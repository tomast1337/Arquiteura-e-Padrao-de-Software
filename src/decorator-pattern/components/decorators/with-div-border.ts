const WithDivBorder = (
  borderColor: string = "red",
  borderWidth: string = "1px"
): ClassDecorator => {
  return (target: any) => {
    const originalRender = target.prototype.render;
    target.prototype.render = () => {
      return `<div style="border: ${borderWidth} solid ${borderColor}">
    ${originalRender.call(
        this
      )}
</div>`;
    };
  };
};

export default WithDivBorder;
