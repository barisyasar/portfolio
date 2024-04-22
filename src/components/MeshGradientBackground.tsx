import Transition from "./Transition";

function MeshGradientBackground() {
  return (
    <div className="mesh-gradient-container hidden sm:block">
      <Transition
        className="mesh-gradient bg-purple-500"
        initial={{
          left: "0%",
          top: "0%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          left: "100%",
          top: "100%",
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          bounce: 0,
          ease: "linear",
        }}
      />
      <Transition
        className="mesh-gradient bg-orange-500"
        initial={{
          left: "100%",
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          left: 0,
          top: "100%",
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          bounce: 0,
          ease: "linear",
        }}
      />
    </div>
  );
}

export default MeshGradientBackground;
