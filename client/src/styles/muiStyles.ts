import { makeStyles } from '@material-ui/core';

export const useAuthStyles = makeStyles(theme => ({
  formWrapper: {
    maxWidth: 700,
    margin: 'auto',
    marginTop: 100,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
  form: {
    padding: theme.spacing(2),
    paddingTop: 0,
    [theme.breakpoints.only('xs')]: {
      padding: 0,
    },
  },
  inputField: {
    padding: theme.spacing(1),
  },
  inputFieldSmallWrapper: {
    padding: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  inputFieldSmall: {
    width: '50%',
    [theme.breakpoints.only('xs')]: {
      width: '100%',
      '&:first-child': {
        paddingBottom: theme.spacing(1),
      },
      '&:last-child': {
        paddingTop: theme.spacing(1),
      },
    },
    [theme.breakpoints.up('sm')]: {
      '&:first-child': {
        paddingRight: theme.spacing(1),
      },
      '&:last-child': {
        paddingLeft: theme.spacing(1),
      },
    },
  },
  btnSubmit: {
    padding: '12px 22px',
  },
  generalErr: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
}));

export const useCreateProjectStyles = makeStyles(theme => ({
  formWrapper: {
    maxWidth: 700,
    margin: 'auto',
    padding: theme.spacing(4),
    paddingTop: 40,
    paddingBottom: 60,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  form: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      paddingTop: theme.spacing(1),
    },
  },
  btnSubmit: {
    padding: '12px 22px',
  },
  inputField: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export const useBoardPageStyles = makeStyles(theme => ({
  pageWrapper: {
    padding: theme.spacing(3),
  },
  pageHeader: {
    paddingBottom: theme.spacing(3),
  },
  titleWrapper: {
    paddingBottom: theme.spacing(1),
  },
  helperText: {
    color: theme.palette.text.secondary,
    [theme.breakpoints.only('xs')]: {
      display: 'flex',
    },
  },
}));

export const useBoardStyles = makeStyles(theme => ({
  boardWrapper: {
    display: 'flex',
  },
  list: {
    width: `calc(50% - ${theme.spacing(1)}px)`,
    minHeight: 180,
    margin: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    boxShadow:
      ' inset 0px 3px 1px -2px rgb(0 0 0 / 20%),inset 0px 2px 2px 0px rgb(0 0 0 / 14%),inset 0px 1px 5px 0px rgb(0 0 0 / 12%)',
  },
  listCaption: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '1.1em',
    padding: theme.spacing(1),
  },
  issueWrapper: {
    padding: theme.spacing(1),
  },
  issue: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(2),
  },
}));