import { TextField, Button, makeStyles } from '@material-ui/core';
import {Children, useEffect, forwardRef, useImperativeHandle, useRef, useState} from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(1),
    }
  }
}));

export let ValidateComponent = ({ children }, ref) => {
  ValidateComponent.displayName = 'ValidateComponent';

  const childRef = useRef();

  const [valid, setValid] = useState(false);

  const classes = useStyles();

  const test = () => {
    setValid(!valid);
  };

  useImperativeHandle(ref, () => ({
    getValid: test
  }));

  useEffect(() => {
    console.log(valid);
  }, [test]);
  // console.log(valid);

  const onSubmit = e => {
    setValid(!valid);
    Children.forEach(children,child => {
      child.ref?.current.getValid();
      child.props?.children?.forEach(el => {
        // console.log(el.ref?.current.getValid());
        return el.ref?.current.getValid();
      })
      // console.log(child.type?.name);
      // if (child.type?.displayName === 'ValidateComponent') {
      //   child.ref?.current.getValid();
      //   // console.log(child.ref?.current, '2');
      // }
      // else if (child.type?.name === 'SomeComponent') {
      //   child.props.children.forEach(el => {
      //     // console.log(el.ref?.current, '1');
      //     el.ref?.current.getValid()
      //   })
      // }
      // console.log(child.props?.children?.ref?.current);
      // console.log(child);
    });
  }

  return (
    <form className={classes.root} ref={childRef}>
      <TextField
        error={valid}
        id="standard-required"
        label="Required"
        defaultValue="Hello World"
        helperText=""
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onSubmit}
      >
        Submit
      </Button>
      {children}
    </form>
  );
}

// let ValidateComponent;
ValidateComponent = forwardRef(ValidateComponent);
