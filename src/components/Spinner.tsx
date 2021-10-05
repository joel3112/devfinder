import Loader from "react-loader-spinner";

interface SpinnerProps {
  show: boolean;
}

const Spinner = ({ show }: SpinnerProps ) => {
  return (
    <Loader
      type="Puff"
      color="var(--color-primary)"
      height={80}
      width={80}
      visible={show} />
  );
};

export default Spinner;
