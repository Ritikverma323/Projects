import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Typography, makeStyles, Box, Paper } from "@material-ui/core";


const initailValue = {
  id: 0,
  fullname: "",
  email: "",
  mobile: "",
  city: "",
  gender: "",
  departmentId: "",
  date: new Date(),
  is_permanent: false,
};

const useStyle = makeStyles((theme) => ({
  root: {
    "&.MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1)
    }
   
  },  
  pageContent:{
    margin:theme.spacing(5),
    padding:theme.spacing(5)
}

}));
function BuyerRegistration() {
  const [values, setValues] = useState(initailValue);
  const Classes = useStyle();
  const handleInputChange=((event)=>{
      const {name,value}=event.target
      setValues({
          ...values,
          [name]:value
      })
  })
  return (
    <div>
      <Paper elevation={2} className={Classes.pageContent}>
        <form className={Classes.root}>
          <Grid container>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                label="Full Name"
                name="fullname"
                onChange={handleInputChange}
                value={values.fullname}
              />
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </form>
      </Paper>
      
        <Paper>this is buyer registration form</Paper>
      
    </div>
  );
}

export default BuyerRegistration;
