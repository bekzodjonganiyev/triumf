import bgImg from "../../assets/images/reactangles-bg.png";

export const Statistics = ({ children, badge }) => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className="py-20">
      <div className="container px-8 mx-auto">
        {badge && (
          <span className="bg-badge text-primary rounded-2xl py-2 px-4">
            {badge}
          </span>
        )}
        {children}
      </div>
    </div>
  );
};
