import { FC, MouseEvent, MouseEventHandler } from 'react';

type Props = {
  log: (item: MouseEvent<HTMLButtonElement>) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
  title: string;
};

function Button({ log, onClick, title }: Props) {
  return (
    <>
      <button
        onClick={e => {
          log(e);
          onClick(e);
        }}
      >
        {title}
      </button>
    </>
  );
}

interface Component {
  Component: FC;
}

function withLogger(Component: FC) {
  function log(item: MouseEvent<HTMLButtonElement>): void {
    console.log('Logger: ', item);
  }

  return function (props: {}) {
    return <Component log={log} {...props} />;
  };
}

const ButtonWithLogger = withLogger(Button);

function ButtonTest() {
  return (
    <div>
      <ButtonWithLogger
        onClick={() => console.log('click handled')}
        title="Click me"
      />
    </div>
  );
}

export default ButtonTest;
