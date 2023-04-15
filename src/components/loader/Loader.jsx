import "./Loader.css"

export const Loader = () => {
  return (
    <div className="absolute w-screen h-screen flex items-start justify-start bg-black transition-opacity">
      <div class="container">
        <div class="box fade-in one">look at me fade in</div>

        <div class="box fade-in two">Oh hi! i can fade too!</div>

        <div class="box fade-in three">Oh hi! i can fade three!</div>
      </div>
    </div>
  );
};
