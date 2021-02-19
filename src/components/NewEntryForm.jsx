import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import './NewEntryForm.scss';

//radio buttons
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  outsidePaper: {
    borderRadius: 0,
    padding: 20,
    marginTop: 0,
    backgroundColor: '#eff1f5',
  },
  formWrap: {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '95%',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 300,
      color: 'black',
      borderColor: 'black',
    },
  },
  cityRow: {
    marginTop: 20,
  },
  textFieldClass: {
    marginTop: 10,
    width: '80%',
  },
  submitButton: {
    width: 300,
    alignSelf: 'left',
  },
}));

export default function NewEntryForm() {
  const classes = useStyles();

  const { register, handleSubmit, control, errors } = useForm();
  const onSubmit = async data => {
    let res = await axios
      .post(`${process.env.API_URL}/newHub`, data, { timeout: 3000 })
      .catch(err => console.error({ data, err }));
  };
  return (
    <Paper className={classes.outsidePaper}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formWrap}>
        {/* <div className={classes.cityRow}> */}
        <Controller
          name="city"
          control={control}
          defaultValue="Austin"
          render={({ onChange, value }) => {
            return (
              <RadioGroup aria-label="city" name="city" value={value} defaultValue="Austin" onChange={onChange} row>
                <FormControlLabel value="Austin" control={<Radio />} label="Austin" defaultChecked />
                <FormControlLabel value="Dallas" control={<Radio />} label="Dallas" />
                <FormControlLabel value="Houston" control={<Radio />} label="Houston" />
                <FormControlLabel value="San Antonio" control={<Radio />} label="San Antonio" />
              </RadioGroup>
            );
          }}
        />
        <TextField
          error={!!errors.name}
          variant="outlined"
          name="name"
          label={errors.name ? errors.name.message : 'Hub Name'}
          inputRef={register({ required: 'A Hub Name is Required' })}
          className={classes.textFieldClass}
          color="secondary"
        />
        <TextField
          error={!!errors.doses}
          variant="outlined"
          name="doses"
          label={errors.doses ? errors.doses.message : '# of Doses'}
          inputRef={register({ required: 'Please Provide # of Doses as a Number', valueAsNumber: true })}
          className={classes.textFieldClass}
          color="secondary"
        />

        <TextField
          error={!!errors.address}
          variant="outlined"
          name="address"
          label={errors.address ? errors.address.message : 'Address'}
          inputRef={register({ required: 'Please Provide An Address' })}
          className={classes.textFieldClass}
          color="secondary"
        />
        <TextField
          error={!!errors.zipcode}
          variant="outlined"
          name="zipcode"
          label={errors.zipcode ? errors.zipcode.message : 'Zipcode'}
          inputRef={register({
            required: 'Please Provide A Valid Zipcode as a Number',
            pattern: {
              value: /^\d{5}$/,
              message: 'Please Provide a 5 digit Zipcode',
            },
            valueAsNumber: true,
          })}
          className={classes.textFieldClass}
          color="secondary"
        />
        <TextField
          error={!!errors.phone}
          variant="outlined"
          name="phone"
          label={errors.phone ? errors.phone.message : 'Phone Number'}
          inputRef={register({
            required: 'Please Provide A Valid Number as a Phone Number',
            minLength: {
              value: 10,
              message: 'Please provide valid 10 or 11 digit phone number',
            },
            maxLength: {
              value: 11,
              message: 'Please provide valid 10 or 11 digit phone number',
            },
            valueAsNumber: true,
          })}
          className={classes.textFieldClass}
          color="secondary"
        />
        {/* <TextField
          error={!!errors.loc}
          variant="outlined"
          name="loc"
          label={errors.loc ? errors.loc.message : 'Longitude & Latitude'}
          inputRef={register}
          className={classes.textFieldClass}
          color="secondary"
        /> */}
        <TextField
          error={!!errors.url}
          variant="outlined"
          name="url"
          label={errors.url ? errors.url.message : 'URL'}
          inputRef={register({ required: 'Please Provide A URL to this Hub' })}
          className={classes.textFieldClass}
          color="secondary"
        />
        <Controller
          name="hubType"
          control={control}
          defaultValue="minor"
          render={({ onChange, value }) => {
            return (
              <RadioGroup
                aria-label="hubType"
                name="hubType"
                value={value}
                defaultValue="minor"
                onChange={onChange}
                row
              >
                <FormControlLabel value="major" control={<Radio />} label="Major" defaultChecked />
                <FormControlLabel value="minor" control={<Radio />} label="Minor" />
              </RadioGroup>
            );
          }}
        />
        <input type="submit" value="Create Entry" className={classes.submitButton} />
      </form>
    </Paper>
  );
}
